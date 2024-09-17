import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChapterCountOrderByAggregateInput } from './chapter-count-order-by-aggregate.input';
import { ChapterAvgOrderByAggregateInput } from './chapter-avg-order-by-aggregate.input';
import { ChapterMaxOrderByAggregateInput } from './chapter-max-order-by-aggregate.input';
import { ChapterMinOrderByAggregateInput } from './chapter-min-order-by-aggregate.input';
import { ChapterSumOrderByAggregateInput } from './chapter-sum-order-by-aggregate.input';

@InputType()
export class ChapterOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    novelId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    commendableTypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    complaitTypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    complaintTargetId?: keyof typeof SortOrder;

    @Field(() => ChapterCountOrderByAggregateInput, {nullable:true})
    _count?: ChapterCountOrderByAggregateInput;

    @Field(() => ChapterAvgOrderByAggregateInput, {nullable:true})
    _avg?: ChapterAvgOrderByAggregateInput;

    @Field(() => ChapterMaxOrderByAggregateInput, {nullable:true})
    _max?: ChapterMaxOrderByAggregateInput;

    @Field(() => ChapterMinOrderByAggregateInput, {nullable:true})
    _min?: ChapterMinOrderByAggregateInput;

    @Field(() => ChapterSumOrderByAggregateInput, {nullable:true})
    _sum?: ChapterSumOrderByAggregateInput;
}
