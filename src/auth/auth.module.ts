import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FirebaseAuthStrategy } from './auth.strategy';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  imports: [ConfigModule],
  providers: [FirebaseAuthStrategy, PrismaService],
  exports: [FirebaseAuthStrategy],
})
export class AuthModule {}
