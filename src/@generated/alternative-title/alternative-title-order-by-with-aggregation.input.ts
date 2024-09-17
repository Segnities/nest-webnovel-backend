import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AlternativeTitleCountOrderByAggregateInput } from './alternative-title-count-order-by-aggregate.input';
import { AlternativeTitleAvgOrderByAggregateInput } from './alternative-title-avg-order-by-aggregate.input';
import { AlternativeTitleMaxOrderByAggregateInput } from './alternative-title-max-order-by-aggregate.input';
import { AlternativeTitleMinOrderByAggregateInput } from './alternative-title-min-order-by-aggregate.input';
import { AlternativeTitleSumOrderByAggregateInput } from './alternative-title-sum-order-by-aggregate.input';

@InputType()
export class AlternativeTitleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    novelId?: keyof typeof SortOrder;

    @Field(() => AlternativeTitleCountOrderByAggregateInput, {nullable:true})
    _count?: AlternativeTitleCountOrderByAggregateInput;

    @Field(() => AlternativeTitleAvgOrderByAggregateInput, {nullable:true})
    _avg?: AlternativeTitleAvgOrderByAggregateInput;

    @Field(() => AlternativeTitleMaxOrderByAggregateInput, {nullable:true})
    _max?: AlternativeTitleMaxOrderByAggregateInput;

    @Field(() => AlternativeTitleMinOrderByAggregateInput, {nullable:true})
    _min?: AlternativeTitleMinOrderByAggregateInput;

    @Field(() => AlternativeTitleSumOrderByAggregateInput, {nullable:true})
    _sum?: AlternativeTitleSumOrderByAggregateInput;
}
