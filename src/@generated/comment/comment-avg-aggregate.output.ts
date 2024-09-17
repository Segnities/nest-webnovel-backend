import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CommentAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;

    @Field(() => Float, {nullable:true})
    nestedLevel?: number;

    @Field(() => Float, {nullable:true})
    likes?: number;

    @Field(() => Float, {nullable:true})
    dislikes?: number;

    @Field(() => Float, {nullable:true})
    commendableTypeId?: number;

    @Field(() => Float, {nullable:true})
    complaintTypeId?: number;

    @Field(() => Float, {nullable:true})
    replyToId?: number;

    @Field(() => Float, {nullable:true})
    complaintTargetId?: number;
}
