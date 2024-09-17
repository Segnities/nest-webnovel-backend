import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AuthorSubscriptionUpdateManyWithoutAuthorNestedInput } from '../author-subscription/author-subscription-update-many-without-author-nested.input';
import { NotificationUpdateManyWithoutAuthorNestedInput } from '../notification/notification-update-many-without-author-nested.input';

@InputType()
export class AuthorUpdateWithoutNovelsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    img?: StringFieldUpdateOperationsInput;

    @Field(() => AuthorSubscriptionUpdateManyWithoutAuthorNestedInput, {nullable:true})
    authorSubscription?: AuthorSubscriptionUpdateManyWithoutAuthorNestedInput;

    @Field(() => NotificationUpdateManyWithoutAuthorNestedInput, {nullable:true})
    notifications?: NotificationUpdateManyWithoutAuthorNestedInput;
}
