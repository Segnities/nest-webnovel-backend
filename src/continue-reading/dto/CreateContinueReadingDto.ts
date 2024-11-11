import {
  IsInt,
  IsNotEmpty
} from 'class-validator';


export class CreateContinueReadingDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsInt()
  @IsNotEmpty()
  lastChapterId: number;
}
