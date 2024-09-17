import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AuthorSubscriptionUncheckedUpdateManyWithoutAuthorNestedInput } from '../author-subscription/author-subscription-unchecked-update-many-without-author-nested.input';
import { NotificationUncheckedUpdateManyWithoutAuthorNestedInput } from '../notification/notification-unchecked-update-many-without-author-nested.input';

@InputType()
export class AuthorUncheckedUpdateWithoutNovelsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    img?: StringFieldUpdateOperationsInput;

    @Field(() => AuthorSubscriptionUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    authorSubscription?: AuthorSubscriptionUncheckedUpdateManyWithoutAuthorNestedInput;

    @Field(() => NotificationUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    notifications?: NotificationUncheckedUpdateManyWithoutAuthorNestedInput;
}
