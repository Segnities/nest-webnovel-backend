import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NovelUncheckedUpdateManyWithoutGenresNestedInput } from '../novel/novel-unchecked-update-many-without-genres-nested.input';

@InputType()
export class GenreUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NovelUncheckedUpdateManyWithoutGenresNestedInput, {nullable:true})
    novels?: NovelUncheckedUpdateManyWithoutGenresNestedInput;
}
