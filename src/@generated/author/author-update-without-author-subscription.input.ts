import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NovelUpdateManyWithoutAuthorNestedInput } from '../novel/novel-update-many-without-author-nested.input';
import { NotificationUpdateManyWithoutAuthorNestedInput } from '../notification/notification-update-many-without-author-nested.input';

@InputType()
export class AuthorUpdateWithoutAuthorSubscriptionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    img?: StringFieldUpdateOperationsInput;

    @Field(() => NovelUpdateManyWithoutAuthorNestedInput, {nullable:true})
    novels?: NovelUpdateManyWithoutAuthorNestedInput;

    @Field(() => NotificationUpdateManyWithoutAuthorNestedInput, {nullable:true})
    notifications?: NotificationUpdateManyWithoutAuthorNestedInput;
}
