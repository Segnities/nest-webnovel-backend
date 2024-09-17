import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { NotificationGroupCountOrderByAggregateInput } from './notification-group-count-order-by-aggregate.input';
import { NotificationGroupAvgOrderByAggregateInput } from './notification-group-avg-order-by-aggregate.input';
import { NotificationGroupMaxOrderByAggregateInput } from './notification-group-max-order-by-aggregate.input';
import { NotificationGroupMinOrderByAggregateInput } from './notification-group-min-order-by-aggregate.input';
import { NotificationGroupSumOrderByAggregateInput } from './notification-group-sum-order-by-aggregate.input';

@InputType()
export class NotificationGroupOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    isDefault?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    parentGroupId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => NotificationGroupCountOrderByAggregateInput, {nullable:true})
    _count?: NotificationGroupCountOrderByAggregateInput;

    @Field(() => NotificationGroupAvgOrderByAggregateInput, {nullable:true})
    _avg?: NotificationGroupAvgOrderByAggregateInput;

    @Field(() => NotificationGroupMaxOrderByAggregateInput, {nullable:true})
    _max?: NotificationGroupMaxOrderByAggregateInput;

    @Field(() => NotificationGroupMinOrderByAggregateInput, {nullable:true})
    _min?: NotificationGroupMinOrderByAggregateInput;

    @Field(() => NotificationGroupSumOrderByAggregateInput, {nullable:true})
    _sum?: NotificationGroupSumOrderByAggregateInput;
}
