import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorSubscriptionWhereInput } from './author-subscription-where.input';
import { Type } from 'class-transformer';
import { AuthorSubscriptionOrderByWithAggregationInput } from './author-subscription-order-by-with-aggregation.input';
import { AuthorSubscriptionScalarFieldEnum } from './author-subscription-scalar-field.enum';
import { AuthorSubscriptionScalarWhereWithAggregatesInput } from './author-subscription-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AuthorSubscriptionCountAggregateInput } from './author-subscription-count-aggregate.input';
import { AuthorSubscriptionAvgAggregateInput } from './author-subscription-avg-aggregate.input';
import { AuthorSubscriptionSumAggregateInput } from './author-subscription-sum-aggregate.input';
import { AuthorSubscriptionMinAggregateInput } from './author-subscription-min-aggregate.input';
import { AuthorSubscriptionMaxAggregateInput } from './author-subscription-max-aggregate.input';

@ArgsType()
export class AuthorSubscriptionGroupByArgs {

    @Field(() => AuthorSubscriptionWhereInput, {nullable:true})
    @Type(() => AuthorSubscriptionWhereInput)
    where?: AuthorSubscriptionWhereInput;

    @Field(() => [AuthorSubscriptionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AuthorSubscriptionOrderByWithAggregationInput>;

    @Field(() => [AuthorSubscriptionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AuthorSubscriptionScalarFieldEnum>;

    @Field(() => AuthorSubscriptionScalarWhereWithAggregatesInput, {nullable:true})
    having?: AuthorSubscriptionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AuthorSubscriptionCountAggregateInput, {nullable:true})
    _count?: AuthorSubscriptionCountAggregateInput;

    @Field(() => AuthorSubscriptionAvgAggregateInput, {nullable:true})
    _avg?: AuthorSubscriptionAvgAggregateInput;

    @Field(() => AuthorSubscriptionSumAggregateInput, {nullable:true})
    _sum?: AuthorSubscriptionSumAggregateInput;

    @Field(() => AuthorSubscriptionMinAggregateInput, {nullable:true})
    _min?: AuthorSubscriptionMinAggregateInput;

    @Field(() => AuthorSubscriptionMaxAggregateInput, {nullable:true})
    _max?: AuthorSubscriptionMaxAggregateInput;
}
