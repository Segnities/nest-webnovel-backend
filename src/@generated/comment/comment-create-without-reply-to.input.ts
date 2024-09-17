import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CommentStatus } from '../prisma/comment-status.enum';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';
import { CommendableTypeCreateNestedOneWithoutCommentsInput } from '../commendable-type/commendable-type-create-nested-one-without-comments.input';
import { ComplaintTargetTypeCreateNestedOneWithoutCommentsInput } from '../complaint-target-type/complaint-target-type-create-nested-one-without-comments.input';
import { CommentCreateNestedManyWithoutReplyToInput } from './comment-create-nested-many-without-reply-to.input';
import { NotificationCreateNestedManyWithoutCommentInput } from '../notification/notification-create-nested-many-without-comment.input';

@InputType()
export class CommentCreateWithoutReplyToInput {

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    complaintTypeId!: number;

    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutCommentsInput;

    @Field(() => CommendableTypeCreateNestedOneWithoutCommentsInput, {nullable:false})
    commendableType!: CommendableTypeCreateNestedOneWithoutCommentsInput;

    @Field(() => ComplaintTargetTypeCreateNestedOneWithoutCommentsInput, {nullable:false})
    complainTargetType!: ComplaintTargetTypeCreateNestedOneWithoutCommentsInput;

    @Field(() => CommentCreateNestedManyWithoutReplyToInput, {nullable:true})
    replies?: CommentCreateNestedManyWithoutReplyToInput;

    @Field(() => NotificationCreateNestedManyWithoutCommentInput, {nullable:true})
    notifications?: NotificationCreateNestedManyWithoutCommentInput;
}
