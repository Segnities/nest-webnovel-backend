import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ContinueReadingCountOrderByAggregateInput } from './continue-reading-count-order-by-aggregate.input';
import { ContinueReadingAvgOrderByAggregateInput } from './continue-reading-avg-order-by-aggregate.input';
import { ContinueReadingMaxOrderByAggregateInput } from './continue-reading-max-order-by-aggregate.input';
import { ContinueReadingMinOrderByAggregateInput } from './continue-reading-min-order-by-aggregate.input';
import { ContinueReadingSumOrderByAggregateInput } from './continue-reading-sum-order-by-aggregate.input';

@InputType()
export class ContinueReadingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    progressPercentage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastChapterId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    novelId?: keyof typeof SortOrder;

    @Field(() => ContinueReadingCountOrderByAggregateInput, {nullable:true})
    _count?: ContinueReadingCountOrderByAggregateInput;

    @Field(() => ContinueReadingAvgOrderByAggregateInput, {nullable:true})
    _avg?: ContinueReadingAvgOrderByAggregateInput;

    @Field(() => ContinueReadingMaxOrderByAggregateInput, {nullable:true})
    _max?: ContinueReadingMaxOrderByAggregateInput;

    @Field(() => ContinueReadingMinOrderByAggregateInput, {nullable:true})
    _min?: ContinueReadingMinOrderByAggregateInput;

    @Field(() => ContinueReadingSumOrderByAggregateInput, {nullable:true})
    _sum?: ContinueReadingSumOrderByAggregateInput;
}
