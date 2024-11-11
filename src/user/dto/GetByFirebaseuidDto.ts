import { IsNotEmpty, IsString } from "class-validator";

export class GetByFirebaseuidDto {
   @IsNotEmpty()
   @IsString()
   fuid: string;
}