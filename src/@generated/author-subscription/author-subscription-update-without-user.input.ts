import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AuthorUpdateOneRequiredWithoutAuthorSubscriptionNestedInput } from '../author/author-update-one-required-without-author-subscription-nested.input';

@InputType()
export class AuthorSubscriptionUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AuthorUpdateOneRequiredWithoutAuthorSubscriptionNestedInput, {nullable:true})
    author?: AuthorUpdateOneRequiredWithoutAuthorSubscriptionNestedInput;
}
