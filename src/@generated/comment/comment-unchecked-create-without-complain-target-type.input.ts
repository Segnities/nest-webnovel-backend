import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CommentStatus } from '../prisma/comment-status.enum';
import { CommentUncheckedCreateNestedManyWithoutReplyToInput } from './comment-unchecked-create-nested-many-without-reply-to.input';
import { NotificationUncheckedCreateNestedManyWithoutCommentInput } from '../notification/notification-unchecked-create-nested-many-without-comment.input';

@InputType()
export class CommentUncheckedCreateWithoutComplainTargetTypeInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:true})
    nestedLevel?: number;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => Int, {nullable:true})
    likes?: number;

    @Field(() => Int, {nullable:true})
    dislikes?: number;

    @Field(() => CommentStatus, {nullable:false})
    status!: keyof typeof CommentStatus;

    @Field(() => Int, {nullable:false})
    commendableTypeId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    complaintTypeId!: number;

    @Field(() => Int, {nullable:true})
    replyToId?: number;

    @Field(() => CommentUncheckedCreateNestedManyWithoutReplyToInput, {nullable:true})
    replies?: CommentUncheckedCreateNestedManyWithoutReplyToInput;

    @Field(() => NotificationUncheckedCreateNestedManyWithoutCommentInput, {nullable:true})
    notifications?: NotificationUncheckedCreateNestedManyWithoutCommentInput;
}
