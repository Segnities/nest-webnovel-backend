import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlternativeTitleWhereInput } from './alternative-title-where.input';
import { Type } from 'class-transformer';
import { AlternativeTitleOrderByWithRelationInput } from './alternative-title-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AlternativeTitleWhereUniqueInput } from './alternative-title-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AlternativeTitleCountAggregateInput } from './alternative-title-count-aggregate.input';
import { AlternativeTitleAvgAggregateInput } from './alternative-title-avg-aggregate.input';
import { AlternativeTitleSumAggregateInput } from './alternative-title-sum-aggregate.input';
import { AlternativeTitleMinAggregateInput } from './alternative-title-min-aggregate.input';
import { AlternativeTitleMaxAggregateInput } from './alternative-title-max-aggregate.input';

@ArgsType()
export class AlternativeTitleAggregateArgs {

    @Field(() => AlternativeTitleWhereInput, {nullable:true})
    @Type(() => AlternativeTitleWhereInput)
    where?: AlternativeTitleWhereInput;

    @Field(() => [AlternativeTitleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AlternativeTitleOrderByWithRelationInput>;

    @Field(() => AlternativeTitleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AlternativeTitleWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AlternativeTitleCountAggregateInput, {nullable:true})
    _count?: AlternativeTitleCountAggregateInput;

    @Field(() => AlternativeTitleAvgAggregateInput, {nullable:true})
    _avg?: AlternativeTitleAvgAggregateInput;

    @Field(() => AlternativeTitleSumAggregateInput, {nullable:true})
    _sum?: AlternativeTitleSumAggregateInput;

    @Field(() => AlternativeTitleMinAggregateInput, {nullable:true})
    _min?: AlternativeTitleMinAggregateInput;

    @Field(() => AlternativeTitleMaxAggregateInput, {nullable:true})
    _max?: AlternativeTitleMaxAggregateInput;
}
