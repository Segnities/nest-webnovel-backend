import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NovelUpdateManyWithoutTagsNestedInput } from '../novel/novel-update-many-without-tags-nested.input';

@InputType()
export class TagUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NovelUpdateManyWithoutTagsNestedInput, {nullable:true})
    novels?: NovelUpdateManyWithoutTagsNestedInput;
}
