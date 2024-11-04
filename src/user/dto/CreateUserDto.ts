import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength
} from 'class-validator';


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
