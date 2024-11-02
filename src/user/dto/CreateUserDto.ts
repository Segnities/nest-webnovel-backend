import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength
} from 'class-validator';

/* enum Role {
  SYSTEM = 'SYSTEM', // System role for automatic actions
  ADMIN = 'ADMIN', // Admin role with full access
  MODERATOR = 'MODERATOR', // Moderator role with permissions to manage content and users
  DEFAULT_USER = 'DEFAULT_USER', // Regular user with standard permissions
} */

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @IsNotEmpty()
  @IsString()
  fuid: string;
}
