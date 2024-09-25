import { applyDecorators, UseGuards, SetMetadata } from '@nestjs/common';
import { FirebaseAuthGuard } from './firebase-auth.guard';

export function Auth(...permissions: string[]) {
  return applyDecorators(
    SetMetadata('permissions', permissions),
    UseGuards(FirebaseAuthGuard),
  );
}
