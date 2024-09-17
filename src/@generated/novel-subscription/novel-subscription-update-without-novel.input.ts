import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutNovelsSubscriptionNestedInput } from '../user/user-update-one-required-without-novels-subscription-nested.input';

@InputType()
export class NovelSubscriptionUpdateWithoutNovelInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutNovelsSubscriptionNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutNovelsSubscriptionNestedInput;
}
