import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutAuthorSubscriptionNestedInput } from '../user/user-update-one-required-without-author-subscription-nested.input';
import { AuthorUpdateOneRequiredWithoutAuthorSubscriptionNestedInput } from '../author/author-update-one-required-without-author-subscription-nested.input';

@InputType()
export class AuthorSubscriptionUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutAuthorSubscriptionNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutAuthorSubscriptionNestedInput;

    @Field(() => AuthorUpdateOneRequiredWithoutAuthorSubscriptionNestedInput, {nullable:true})
    author?: AuthorUpdateOneRequiredWithoutAuthorSubscriptionNestedInput;
}
