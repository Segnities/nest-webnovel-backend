import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NovelUpdateManyWithoutGenresNestedInput } from '../novel/novel-update-many-without-genres-nested.input';

@InputType()
export class GenreUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NovelUpdateManyWithoutGenresNestedInput, {nullable:true})
    novels?: NovelUpdateManyWithoutGenresNestedInput;
}
