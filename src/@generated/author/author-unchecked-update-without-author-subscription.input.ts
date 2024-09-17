import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NovelUncheckedUpdateManyWithoutAuthorNestedInput } from '../novel/novel-unchecked-update-many-without-author-nested.input';
import { NotificationUncheckedUpdateManyWithoutAuthorNestedInput } from '../notification/notification-unchecked-update-many-without-author-nested.input';

@InputType()
export class AuthorUncheckedUpdateWithoutAuthorSubscriptionInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    img?: StringFieldUpdateOperationsInput;

    @Field(() => NovelUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    novels?: NovelUncheckedUpdateManyWithoutAuthorNestedInput;

    @Field(() => NotificationUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    notifications?: NotificationUncheckedUpdateManyWithoutAuthorNestedInput;
}
