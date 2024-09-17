import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BanWhereInput } from './ban-where.input';
import { Type } from 'class-transformer';
import { BanOrderByWithAggregationInput } from './ban-order-by-with-aggregation.input';
import { BanScalarFieldEnum } from './ban-scalar-field.enum';
import { BanScalarWhereWithAggregatesInput } from './ban-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BanCountAggregateInput } from './ban-count-aggregate.input';
import { BanAvgAggregateInput } from './ban-avg-aggregate.input';
import { BanSumAggregateInput } from './ban-sum-aggregate.input';
import { BanMinAggregateInput } from './ban-min-aggregate.input';
import { BanMaxAggregateInput } from './ban-max-aggregate.input';

@ArgsType()
export class BanGroupByArgs {

    @Field(() => BanWhereInput, {nullable:true})
    @Type(() => BanWhereInput)
    where?: BanWhereInput;

    @Field(() => [BanOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BanOrderByWithAggregationInput>;

    @Field(() => [BanScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BanScalarFieldEnum>;

    @Field(() => BanScalarWhereWithAggregatesInput, {nullable:true})
    having?: BanScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BanCountAggregateInput, {nullable:true})
    _count?: BanCountAggregateInput;

    @Field(() => BanAvgAggregateInput, {nullable:true})
    _avg?: BanAvgAggregateInput;

    @Field(() => BanSumAggregateInput, {nullable:true})
    _sum?: BanSumAggregateInput;

    @Field(() => BanMinAggregateInput, {nullable:true})
    _min?: BanMinAggregateInput;

    @Field(() => BanMaxAggregateInput, {nullable:true})
    _max?: BanMaxAggregateInput;
}
