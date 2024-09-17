import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumCommentStatusFieldUpdateOperationsInput } from '../prisma/enum-comment-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCommentsNestedInput } from '../user/user-update-one-required-without-comments-nested.input';
import { CommendableTypeUpdateOneRequiredWithoutCommentsNestedInput } from '../commendable-type/commendable-type-update-one-required-without-comments-nested.input';
import { CommentUpdateOneWithoutRepliesNestedInput } from './comment-update-one-without-replies-nested.input';
import { CommentUpdateManyWithoutReplyToNestedInput } from './comment-update-many-without-reply-to-nested.input';
import { NotificationUpdateManyWithoutCommentNestedInput } from '../notification/notification-update-many-without-comment-nested.input';

@InputType()
export class CommentUpdateWithoutComplainTargetTypeInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    nestedLevel?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    body?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    likes?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    dislikes?: IntFieldUpdateOperationsInput;

    @Field(() => EnumCommentStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumCommentStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    complaintTypeId?: IntFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput;

    @Field(() => CommendableTypeUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    commendableType?: CommendableTypeUpdateOneRequiredWithoutCommentsNestedInput;

    @Field(() => CommentUpdateOneWithoutRepliesNestedInput, {nullable:true})
    replyTo?: CommentUpdateOneWithoutRepliesNestedInput;

    @Field(() => CommentUpdateManyWithoutReplyToNestedInput, {nullable:true})
    replies?: CommentUpdateManyWithoutReplyToNestedInput;

    @Field(() => NotificationUpdateManyWithoutCommentNestedInput, {nullable:true})
    notifications?: NotificationUpdateManyWithoutCommentNestedInput;
}
