import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TeamCountOrderByAggregateInput } from './team-count-order-by-aggregate.input';
import { TeamAvgOrderByAggregateInput } from './team-avg-order-by-aggregate.input';
import { TeamMaxOrderByAggregateInput } from './team-max-order-by-aggregate.input';
import { TeamMinOrderByAggregateInput } from './team-min-order-by-aggregate.input';
import { TeamSumOrderByAggregateInput } from './team-sum-order-by-aggregate.input';

@InputType()
export class TeamOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chapters_count?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    books_count?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => TeamCountOrderByAggregateInput, {nullable:true})
    _count?: TeamCountOrderByAggregateInput;

    @Field(() => TeamAvgOrderByAggregateInput, {nullable:true})
    _avg?: TeamAvgOrderByAggregateInput;

    @Field(() => TeamMaxOrderByAggregateInput, {nullable:true})
    _max?: TeamMaxOrderByAggregateInput;

    @Field(() => TeamMinOrderByAggregateInput, {nullable:true})
    _min?: TeamMinOrderByAggregateInput;

    @Field(() => TeamSumOrderByAggregateInput, {nullable:true})
    _sum?: TeamSumOrderByAggregateInput;
}
