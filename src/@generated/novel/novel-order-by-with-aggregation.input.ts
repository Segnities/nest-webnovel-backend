import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { NovelCountOrderByAggregateInput } from './novel-count-order-by-aggregate.input';
import { NovelAvgOrderByAggregateInput } from './novel-avg-order-by-aggregate.input';
import { NovelMaxOrderByAggregateInput } from './novel-max-order-by-aggregate.input';
import { NovelMinOrderByAggregateInput } from './novel-min-order-by-aggregate.input';
import { NovelSumOrderByAggregateInput } from './novel-sum-order-by-aggregate.input';

@InputType()
export class NovelOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    original_title?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    img?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isAdult?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    releaseYear?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    coverImg?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    views?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    translationStatus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    format?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    commendableTypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    complaintTargetId?: keyof typeof SortOrder;

    @Field(() => NovelCountOrderByAggregateInput, {nullable:true})
    _count?: NovelCountOrderByAggregateInput;

    @Field(() => NovelAvgOrderByAggregateInput, {nullable:true})
    _avg?: NovelAvgOrderByAggregateInput;

    @Field(() => NovelMaxOrderByAggregateInput, {nullable:true})
    _max?: NovelMaxOrderByAggregateInput;

    @Field(() => NovelMinOrderByAggregateInput, {nullable:true})
    _min?: NovelMinOrderByAggregateInput;

    @Field(() => NovelSumOrderByAggregateInput, {nullable:true})
    _sum?: NovelSumOrderByAggregateInput;
}
