import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NovelUpdateOneRequiredWithoutNovelCollectionMappingNestedInput } from '../novel/novel-update-one-required-without-novel-collection-mapping-nested.input';

@InputType()
export class NovelCollectionMappingUpdateWithoutUserCollectionMappingInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NovelUpdateOneRequiredWithoutNovelCollectionMappingNestedInput, {nullable:true})
    novel?: NovelUpdateOneRequiredWithoutNovelCollectionMappingNestedInput;
}
