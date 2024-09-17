import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { UserUpdateOneRequiredWithoutReviewsNestedInput } from '../user/user-update-one-required-without-reviews-nested.input';
import { NovelUpdateOneRequiredWithoutReviewsNestedInput } from '../novel/novel-update-one-required-without-reviews-nested.input';
import { CommendableTypeUpdateOneRequiredWithoutReviewsNestedInput } from '../commendable-type/commendable-type-update-one-required-without-reviews-nested.input';
import { ComplaintTargetTypeUpdateOneRequiredWithoutReviewsNestedInput } from '../complaint-target-type/complaint-target-type-update-one-required-without-reviews-nested.input';

@InputType()
export class ReviewUpdateWithoutNotificationsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    body?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    likes?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    views?: IntFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutReviewsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput;

    @Field(() => NovelUpdateOneRequiredWithoutReviewsNestedInput, {nullable:true})
    novel?: NovelUpdateOneRequiredWithoutReviewsNestedInput;

    @Field(() => CommendableTypeUpdateOneRequiredWithoutReviewsNestedInput, {nullable:true})
    commendableType?: CommendableTypeUpdateOneRequiredWithoutReviewsNestedInput;

    @Field(() => ComplaintTargetTypeUpdateOneRequiredWithoutReviewsNestedInput, {nullable:true})
    complainTargetType?: ComplaintTargetTypeUpdateOneRequiredWithoutReviewsNestedInput;
}
