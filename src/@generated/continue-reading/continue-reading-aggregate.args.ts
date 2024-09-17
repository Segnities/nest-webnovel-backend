import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContinueReadingWhereInput } from './continue-reading-where.input';
import { Type } from 'class-transformer';
import { ContinueReadingOrderByWithRelationInput } from './continue-reading-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ContinueReadingWhereUniqueInput } from './continue-reading-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ContinueReadingCountAggregateInput } from './continue-reading-count-aggregate.input';
import { ContinueReadingAvgAggregateInput } from './continue-reading-avg-aggregate.input';
import { ContinueReadingSumAggregateInput } from './continue-reading-sum-aggregate.input';
import { ContinueReadingMinAggregateInput } from './continue-reading-min-aggregate.input';
import { ContinueReadingMaxAggregateInput } from './continue-reading-max-aggregate.input';

@ArgsType()
export class ContinueReadingAggregateArgs {

    @Field(() => ContinueReadingWhereInput, {nullable:true})
    @Type(() => ContinueReadingWhereInput)
    where?: ContinueReadingWhereInput;

    @Field(() => [ContinueReadingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ContinueReadingOrderByWithRelationInput>;

    @Field(() => ContinueReadingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ContinueReadingWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ContinueReadingCountAggregateInput, {nullable:true})
    _count?: ContinueReadingCountAggregateInput;

    @Field(() => ContinueReadingAvgAggregateInput, {nullable:true})
    _avg?: ContinueReadingAvgAggregateInput;

    @Field(() => ContinueReadingSumAggregateInput, {nullable:true})
    _sum?: ContinueReadingSumAggregateInput;

    @Field(() => ContinueReadingMinAggregateInput, {nullable:true})
    _min?: ContinueReadingMinAggregateInput;

    @Field(() => ContinueReadingMaxAggregateInput, {nullable:true})
    _max?: ContinueReadingMaxAggregateInput;
}
