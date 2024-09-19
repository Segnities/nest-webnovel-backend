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
      }, // Replace with your Firebase project ID
    });
    if (!admin.apps.length) {
      this.firebaseApp = admin.initializeApp({
        projectId: this.configService.get<string>('FIREBASE_PROJECT_ID'),
      });
    } else {
      this.firebaseApp = admin.app();
    }
  }

  async validate(token: string) {
    try {
      console.log(token);
      const decodedToken = await admin.auth().verifyIdToken(token);
      const user = await this.prisma.user.findUnique({
        where: { email: decodedToken.email },
        include: { role: true },
      });
      if (!user) {
        throw new UnauthorizedException('User not found');
      }
      return user;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
