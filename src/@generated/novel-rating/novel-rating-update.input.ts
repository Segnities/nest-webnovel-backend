import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NovelUpdateOneRequiredWithoutNovelRatingNestedInput } from '../novel/novel-update-one-required-without-novel-rating-nested.input';

@InputType()
export class NovelRatingUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    votesCount?: IntFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    avgRating?: FloatFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    totalRating?: IntFieldUpdateOperationsInput;

    @Field(() => NovelUpdateOneRequiredWithoutNovelRatingNestedInput, {nullable:true})
    novel?: NovelUpdateOneRequiredWithoutNovelRatingNestedInput;
}
