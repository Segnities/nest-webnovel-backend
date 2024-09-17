import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CommentStatus } from '../prisma/comment-status.enum';

@ObjectType()
export class CommentMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    nestedLevel?: number;

    @Field(() => String, {nullable:true})
    body?: string;

    @Field(() => Int, {nullable:true})
    likes?: number;

    @Field(() => Int, {nullable:true})
    dislikes?: number;

    @Field(() => CommentStatus, {nullable:true})
    status?: keyof typeof CommentStatus;

    @Field(() => Int, {nullable:true})
    commendableTypeId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    complaintTypeId?: number;

    @Field(() => Int, {nullable:true})
    replyToId?: number;

    @Field(() => Int, {nullable:true})
    complaintTargetId?: number;
}
