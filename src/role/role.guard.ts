import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './role.decorator';
import { PrismaService } from '../prisma/prisma.service';
import * as admin from 'firebase-admin';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const authorizationHeader = request.headers.authorization();
    if (!authorizationHeader) {
      throw new UnauthorizedException('Authorization header is missing');
    }

    const token = request.headers.authorization?.split('Bearer ')[1];
    if (!token) {
      throw new UnauthorizedException('Token is missing');
    }

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      const email = decodedToken.email;

      const userWithRole = await this.prisma.user.findUnique({
        where: { email },
        include: { role: true },
      });

      if (!userWithRole || !userWithRole.role) {
        return false;
      }

      const hasRole = requiredRoles.some(
        (role) => userWithRole.role.name === role,
      );
      if (!hasRole) {
        throw new ForbiddenException('User does not have the required role');
      }

      return true;
    } catch (error) {
      console.error('Error verifying Firebase token:', error);
      return false;
    }
  }
}
