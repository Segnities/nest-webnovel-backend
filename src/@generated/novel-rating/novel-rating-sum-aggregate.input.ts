import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NovelRatingSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    votesCount?: true;

    @Field(() => Boolean, {nullable:true})
    avgRating?: true;

    @Field(() => Boolean, {nullable:true})
    totalRating?: true;

    @Field(() => Boolean, {nullable:true})
    novelId?: true;
}
