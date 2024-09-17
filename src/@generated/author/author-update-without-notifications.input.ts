import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NovelUpdateManyWithoutAuthorNestedInput } from '../novel/novel-update-many-without-author-nested.input';
import { AuthorSubscriptionUpdateManyWithoutAuthorNestedInput } from '../author-subscription/author-subscription-update-many-without-author-nested.input';

@InputType()
export class AuthorUpdateWithoutNotificationsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    img?: StringFieldUpdateOperationsInput;

    @Field(() => NovelUpdateManyWithoutAuthorNestedInput, {nullable:true})
    novels?: NovelUpdateManyWithoutAuthorNestedInput;

    @Field(() => AuthorSubscriptionUpdateManyWithoutAuthorNestedInput, {nullable:true})
    authorSubscription?: AuthorSubscriptionUpdateManyWithoutAuthorNestedInput;
}
