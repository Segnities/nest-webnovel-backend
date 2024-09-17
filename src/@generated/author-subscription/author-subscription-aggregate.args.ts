import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorSubscriptionWhereInput } from './author-subscription-where.input';
import { Type } from 'class-transformer';
import { AuthorSubscriptionOrderByWithRelationInput } from './author-subscription-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AuthorSubscriptionWhereUniqueInput } from './author-subscription-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AuthorSubscriptionCountAggregateInput } from './author-subscription-count-aggregate.input';
import { AuthorSubscriptionAvgAggregateInput } from './author-subscription-avg-aggregate.input';
import { AuthorSubscriptionSumAggregateInput } from './author-subscription-sum-aggregate.input';
import { AuthorSubscriptionMinAggregateInput } from './author-subscription-min-aggregate.input';
import { AuthorSubscriptionMaxAggregateInput } from './author-subscription-max-aggregate.input';

@ArgsType()
export class AuthorSubscriptionAggregateArgs {

    @Field(() => AuthorSubscriptionWhereInput, {nullable:true})
    @Type(() => AuthorSubscriptionWhereInput)
    where?: AuthorSubscriptionWhereInput;

    @Field(() => [AuthorSubscriptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AuthorSubscriptionOrderByWithRelationInput>;

    @Field(() => AuthorSubscriptionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AuthorSubscriptionWhereUniqueInput, 'id'>;

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
