import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NovelUpdateOneRequiredWithoutAlternativeTitlesNestedInput } from '../novel/novel-update-one-required-without-alternative-titles-nested.input';

@InputType()
export class AlternativeTitleUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NovelUpdateOneRequiredWithoutAlternativeTitlesNestedInput, {nullable:true})
    novel?: NovelUpdateOneRequiredWithoutAlternativeTitlesNestedInput;
}
