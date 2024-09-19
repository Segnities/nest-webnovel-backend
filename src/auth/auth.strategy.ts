import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import * as admin from 'firebase-admin';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(
  Strategy,
  'firebase-auth',
) {
  private firebaseApp: admin.app.App;

  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKeyProvider: async (request, rawJwtToken, done) => {
        const projectId = this.configService.get<string>('FIREBASE_PROJECT_ID');
        done(null, projectId);
      },
    });

    if (!admin.apps.length) {
      this.firebaseApp = admin.initializeApp({
        projectId: this.configService.get<string>('FIREBASE_PROJECT_ID'),
        credential: admin.credential.applicationDefault(), // Ensure credentials are provided
      });
    } else {
      this.firebaseApp = admin.app();
    }
  }

  async validate(token: string) {
    try {
      const decodedToken = await this.firebaseApp.auth().verifyIdToken(token);
      const user = await this.prisma.user.findUnique({
        where: { email: decodedToken.email },
        include: { role: true },
      });

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      return user;
    } catch (error) {
      if (error.code === 'auth/argument-error') {
        throw new UnauthorizedException('Invalid token format');
      } else if (error.code === 'auth/id-token-expired') {
        throw new UnauthorizedException('Token has expired');
      } else {
        throw new UnauthorizedException('Invalid token');
      }
    }
  }
}
