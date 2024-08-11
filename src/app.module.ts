import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PermissionModule } from './permission/permission.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, PermissionModule, RoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
