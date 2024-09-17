import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CommentStatus } from '../prisma/comment-status.enum';
import { User } from '../user/user.model';
import { CommendableType } from '../commendable-type/commendable-type.model';
import { ComplaintTargetType } from '../complaint-target-type/complaint-target-type.model';
import { Notification } from '../notification/notification.model';
import { CommentCount } from './comment-count.output';

@ObjectType()
export class Comment {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:true})
    nestedLevel!: number | null;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => Int, {nullable:false,defaultValue:0})
    likes!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    dislikes!: number;

    @Field(() => CommentStatus, {nullable:false})
    status!: keyof typeof CommentStatus;

    @Field(() => Int, {nullable:false})
    commendableTypeId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    complaintTypeId!: number;

    @Field(() => Int, {nullable:true})
    replyToId!: number | null;

    @Field(() => Int, {nullable:false})
    complaintTargetId!: number;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => CommendableType, {nullable:false})
    commendableType?: CommendableType;

    @Field(() => ComplaintTargetType, {nullable:false})
    complainTargetType?: ComplaintTargetType;

    @Field(() => Comment, {nullable:true})
    replyTo?: Comment | null;

    @Field(() => [Comment], {nullable:true})
    replies?: Array<Comment>;

    @Field(() => [Notification], {nullable:true})
    notifications?: Array<Notification>;

    @Field(() => CommentCount, {nullable:false})
    _count?: CommentCount;
}
