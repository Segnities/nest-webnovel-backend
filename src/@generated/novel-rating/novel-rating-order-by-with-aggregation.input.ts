import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NovelRatingCountOrderByAggregateInput } from './novel-rating-count-order-by-aggregate.input';
import { NovelRatingAvgOrderByAggregateInput } from './novel-rating-avg-order-by-aggregate.input';
import { NovelRatingMaxOrderByAggregateInput } from './novel-rating-max-order-by-aggregate.input';
import { NovelRatingMinOrderByAggregateInput } from './novel-rating-min-order-by-aggregate.input';
import { NovelRatingSumOrderByAggregateInput } from './novel-rating-sum-order-by-aggregate.input';

@InputType()
export class NovelRatingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    votesCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avgRating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalRating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    novelId?: keyof typeof SortOrder;

    @Field(() => NovelRatingCountOrderByAggregateInput, {nullable:true})
    _count?: NovelRatingCountOrderByAggregateInput;

    @Field(() => NovelRatingAvgOrderByAggregateInput, {nullable:true})
    _avg?: NovelRatingAvgOrderByAggregateInput;

    @Field(() => NovelRatingMaxOrderByAggregateInput, {nullable:true})
    _max?: NovelRatingMaxOrderByAggregateInput;

    @Field(() => NovelRatingMinOrderByAggregateInput, {nullable:true})
    _min?: NovelRatingMinOrderByAggregateInput;

    @Field(() => NovelRatingSumOrderByAggregateInput, {nullable:true})
    _sum?: NovelRatingSumOrderByAggregateInput;
}
