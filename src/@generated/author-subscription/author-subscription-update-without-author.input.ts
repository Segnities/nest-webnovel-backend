import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutAuthorSubscriptionNestedInput } from '../user/user-update-one-required-without-author-subscription-nested.input';

@InputType()
export class AuthorSubscriptionUpdateWithoutAuthorInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutAuthorSubscriptionNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutAuthorSubscriptionNestedInput;
}
