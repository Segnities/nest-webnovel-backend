import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from '@/prisma/prisma.service';
import { UserController } from './user.controller';
import { FirebaseAdmin } from '@config/firebase.setup';

@Module({
  providers: [UserService, PrismaService, FirebaseAdmin],
  controllers: [UserController],
})
export class UserModule {}
