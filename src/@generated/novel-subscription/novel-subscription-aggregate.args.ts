import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelSubscriptionWhereInput } from './novel-subscription-where.input';
import { Type } from 'class-transformer';
import { NovelSubscriptionOrderByWithRelationInput } from './novel-subscription-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NovelSubscriptionWhereUniqueInput } from './novel-subscription-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NovelSubscriptionCountAggregateInput } from './novel-subscription-count-aggregate.input';
import { NovelSubscriptionAvgAggregateInput } from './novel-subscription-avg-aggregate.input';
import { NovelSubscriptionSumAggregateInput } from './novel-subscription-sum-aggregate.input';
import { NovelSubscriptionMinAggregateInput } from './novel-subscription-min-aggregate.input';
import { NovelSubscriptionMaxAggregateInput } from './novel-subscription-max-aggregate.input';

@ArgsType()
export class NovelSubscriptionAggregateArgs {

    @Field(() => NovelSubscriptionWhereInput, {nullable:true})
    @Type(() => NovelSubscriptionWhereInput)
    where?: NovelSubscriptionWhereInput;

    @Field(() => [NovelSubscriptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NovelSubscriptionOrderByWithRelationInput>;

    @Field(() => NovelSubscriptionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NovelSubscriptionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NovelSubscriptionCountAggregateInput, {nullable:true})
    _count?: NovelSubscriptionCountAggregateInput;

    @Field(() => NovelSubscriptionAvgAggregateInput, {nullable:true})
    _avg?: NovelSubscriptionAvgAggregateInput;

    @Field(() => NovelSubscriptionSumAggregateInput, {nullable:true})
    _sum?: NovelSubscriptionSumAggregateInput;

    @Field(() => NovelSubscriptionMinAggregateInput, {nullable:true})
    _min?: NovelSubscriptionMinAggregateInput;

    @Field(() => NovelSubscriptionMaxAggregateInput, {nullable:true})
    _max?: NovelSubscriptionMaxAggregateInput;
}
