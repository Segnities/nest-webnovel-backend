import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ContentComplaintCountOrderByAggregateInput } from './content-complaint-count-order-by-aggregate.input';
import { ContentComplaintAvgOrderByAggregateInput } from './content-complaint-avg-order-by-aggregate.input';
import { ContentComplaintMaxOrderByAggregateInput } from './content-complaint-max-order-by-aggregate.input';
import { ContentComplaintMinOrderByAggregateInput } from './content-complaint-min-order-by-aggregate.input';
import { ContentComplaintSumOrderByAggregateInput } from './content-complaint-sum-order-by-aggregate.input';

@InputType()
export class ContentComplaintOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reasonId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    complaintTargetId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    resolvedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    issuedBy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    resolvedBy?: keyof typeof SortOrder;

    @Field(() => ContentComplaintCountOrderByAggregateInput, {nullable:true})
    _count?: ContentComplaintCountOrderByAggregateInput;

    @Field(() => ContentComplaintAvgOrderByAggregateInput, {nullable:true})
    _avg?: ContentComplaintAvgOrderByAggregateInput;

    @Field(() => ContentComplaintMaxOrderByAggregateInput, {nullable:true})
    _max?: ContentComplaintMaxOrderByAggregateInput;

    @Field(() => ContentComplaintMinOrderByAggregateInput, {nullable:true})
    _min?: ContentComplaintMinOrderByAggregateInput;

    @Field(() => ContentComplaintSumOrderByAggregateInput, {nullable:true})
    _sum?: ContentComplaintSumOrderByAggregateInput;
}
