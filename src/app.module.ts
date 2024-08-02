import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { PermissionModule } from './permission/permission.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/novelslib'), UserModule, PermissionModule, RoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
