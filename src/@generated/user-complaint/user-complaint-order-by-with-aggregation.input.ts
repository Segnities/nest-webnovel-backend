import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserComplaintCountOrderByAggregateInput } from './user-complaint-count-order-by-aggregate.input';
import { UserComplaintAvgOrderByAggregateInput } from './user-complaint-avg-order-by-aggregate.input';
import { UserComplaintMaxOrderByAggregateInput } from './user-complaint-max-order-by-aggregate.input';
import { UserComplaintMinOrderByAggregateInput } from './user-complaint-min-order-by-aggregate.input';
import { UserComplaintSumOrderByAggregateInput } from './user-complaint-sum-order-by-aggregate.input';

@InputType()
export class UserComplaintOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reasonId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    complaintTargetId?: keyof typeof SortOrder;

    @Field(() => UserComplaintCountOrderByAggregateInput, {nullable:true})
    _count?: UserComplaintCountOrderByAggregateInput;

    @Field(() => UserComplaintAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserComplaintAvgOrderByAggregateInput;

    @Field(() => UserComplaintMaxOrderByAggregateInput, {nullable:true})
    _max?: UserComplaintMaxOrderByAggregateInput;

    @Field(() => UserComplaintMinOrderByAggregateInput, {nullable:true})
    _min?: UserComplaintMinOrderByAggregateInput;

    @Field(() => UserComplaintSumOrderByAggregateInput, {nullable:true})
    _sum?: UserComplaintSumOrderByAggregateInput;
}
