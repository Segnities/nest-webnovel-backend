import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class NovelRatingAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    votesCount?: number;

    @Field(() => Float, {nullable:true})
    avgRating?: number;

    @Field(() => Float, {nullable:true})
    totalRating?: number;

    @Field(() => Float, {nullable:true})
    novelId?: number;
}
