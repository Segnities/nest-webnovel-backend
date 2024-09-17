import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class NotificationAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    userId?: number;

    @Field(() => Float, {nullable:true})
    typeId?: number;

    @Field(() => Float, {nullable:true})
    relatedEntityId?: number;

    @Field(() => Float, {nullable:true})
    novelId?: number;

    @Field(() => Float, {nullable:true})
    commentId?: number;

    @Field(() => Float, {nullable:true})
    reviewId?: number;

    @Field(() => Float, {nullable:true})
    authorId?: number;

    @Field(() => Float, {nullable:true})
    notificationGroupId?: number;
}
