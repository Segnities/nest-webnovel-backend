import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NovelUpdateOneRequiredWithoutUsersRatingsNestedInput } from '../novel/novel-update-one-required-without-users-ratings-nested.input';
import { UserUpdateOneRequiredWithoutUsersRatingsNestedInput } from '../user/user-update-one-required-without-users-ratings-nested.input';

@InputType()
export class UserRatingUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rating?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NovelUpdateOneRequiredWithoutUsersRatingsNestedInput, {nullable:true})
    novel?: NovelUpdateOneRequiredWithoutUsersRatingsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutUsersRatingsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutUsersRatingsNestedInput;
}
