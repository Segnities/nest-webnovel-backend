import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BanReasonWhereInput } from './ban-reason-where.input';
import { Type } from 'class-transformer';
import { BanReasonOrderByWithRelationInput } from './ban-reason-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BanReasonWhereUniqueInput } from './ban-reason-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BanReasonCountAggregateInput } from './ban-reason-count-aggregate.input';
import { BanReasonAvgAggregateInput } from './ban-reason-avg-aggregate.input';
import { BanReasonSumAggregateInput } from './ban-reason-sum-aggregate.input';
import { BanReasonMinAggregateInput } from './ban-reason-min-aggregate.input';
import { BanReasonMaxAggregateInput } from './ban-reason-max-aggregate.input';

@ArgsType()
export class BanReasonAggregateArgs {

    @Field(() => BanReasonWhereInput, {nullable:true})
    @Type(() => BanReasonWhereInput)
    where?: BanReasonWhereInput;

    @Field(() => [BanReasonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BanReasonOrderByWithRelationInput>;

    @Field(() => BanReasonWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BanReasonWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BanReasonCountAggregateInput, {nullable:true})
    _count?: BanReasonCountAggregateInput;

    @Field(() => BanReasonAvgAggregateInput, {nullable:true})
    _avg?: BanReasonAvgAggregateInput;

    @Field(() => BanReasonSumAggregateInput, {nullable:true})
    _sum?: BanReasonSumAggregateInput;

    @Field(() => BanReasonMinAggregateInput, {nullable:true})
    _min?: BanReasonMinAggregateInput;

    @Field(() => BanReasonMaxAggregateInput, {nullable:true})
    _max?: BanReasonMaxAggregateInput;
}
