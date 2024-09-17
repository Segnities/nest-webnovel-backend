import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class NovelRatingMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    votesCount?: number;

    @Field(() => Float, {nullable:true})
    avgRating?: number;

    @Field(() => Int, {nullable:true})
    totalRating?: number;

    @Field(() => Int, {nullable:true})
    novelId?: number;
}
