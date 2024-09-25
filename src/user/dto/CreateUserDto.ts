import {
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
  Matches,
  IsEnum,
  IsAlpha,
} from 'class-validator';

enum Role {
  SYSTEM = 'SYSTEM', // System role for automatic actions
  ADMIN = 'ADMIN', // Admin role with full access
  MODERATOR = 'MODERATOR', // Moderator role with permissions to manage content and users
  DEFAULT_USER = 'DEFAULT_USER', // Regular user with standard permissions
}

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/, {
    message: 'password too weak',
  })
  password: string;

  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  @IsAlpha()
  firstName: string;

  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  @IsAlpha()
  lastName: string;

  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(30)
  @IsAlpha()
  username: string;

  @IsNotEmpty()
  @IsEnum(Role, { each: true })
  role: Role[];
}
