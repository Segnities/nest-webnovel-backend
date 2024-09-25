import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  imports: [ConfigModule],
  providers: [PrismaService],
})
export class AuthModule {}
