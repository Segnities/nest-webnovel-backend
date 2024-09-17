import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CommentSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    nestedLevel?: number;

    @Field(() => Int, {nullable:true})
    likes?: number;

    @Field(() => Int, {nullable:true})
    dislikes?: number;

    @Field(() => Int, {nullable:true})
    commendableTypeId?: number;

    @Field(() => Int, {nullable:true})
    complaintTypeId?: number;

    @Field(() => Int, {nullable:true})
    replyToId?: number;

    @Field(() => Int, {nullable:true})
    complaintTargetId?: number;
}
