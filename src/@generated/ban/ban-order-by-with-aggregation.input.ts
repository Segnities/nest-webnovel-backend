import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BanCountOrderByAggregateInput } from './ban-count-order-by-aggregate.input';
import { BanAvgOrderByAggregateInput } from './ban-avg-order-by-aggregate.input';
import { BanMaxOrderByAggregateInput } from './ban-max-order-by-aggregate.input';
import { BanMinOrderByAggregateInput } from './ban-min-order-by-aggregate.input';
import { BanSumOrderByAggregateInput } from './ban-sum-order-by-aggregate.input';

@InputType()
export class BanOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    banStart?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    banEnd?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    appealed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    appealId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    issuedBy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    complaintTargetId?: keyof typeof SortOrder;

    @Field(() => BanCountOrderByAggregateInput, {nullable:true})
    _count?: BanCountOrderByAggregateInput;

    @Field(() => BanAvgOrderByAggregateInput, {nullable:true})
    _avg?: BanAvgOrderByAggregateInput;

    @Field(() => BanMaxOrderByAggregateInput, {nullable:true})
    _max?: BanMaxOrderByAggregateInput;

    @Field(() => BanMinOrderByAggregateInput, {nullable:true})
    _min?: BanMinOrderByAggregateInput;

    @Field(() => BanSumOrderByAggregateInput, {nullable:true})
    _sum?: BanSumOrderByAggregateInput;
}
