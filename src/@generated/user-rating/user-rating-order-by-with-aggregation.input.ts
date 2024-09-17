import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserRatingCountOrderByAggregateInput } from './user-rating-count-order-by-aggregate.input';
import { UserRatingAvgOrderByAggregateInput } from './user-rating-avg-order-by-aggregate.input';
import { UserRatingMaxOrderByAggregateInput } from './user-rating-max-order-by-aggregate.input';
import { UserRatingMinOrderByAggregateInput } from './user-rating-min-order-by-aggregate.input';
import { UserRatingSumOrderByAggregateInput } from './user-rating-sum-order-by-aggregate.input';

@InputType()
export class UserRatingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    novelId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => UserRatingCountOrderByAggregateInput, {nullable:true})
    _count?: UserRatingCountOrderByAggregateInput;

    @Field(() => UserRatingAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserRatingAvgOrderByAggregateInput;

    @Field(() => UserRatingMaxOrderByAggregateInput, {nullable:true})
    _max?: UserRatingMaxOrderByAggregateInput;

    @Field(() => UserRatingMinOrderByAggregateInput, {nullable:true})
    _min?: UserRatingMinOrderByAggregateInput;

    @Field(() => UserRatingSumOrderByAggregateInput, {nullable:true})
    _sum?: UserRatingSumOrderByAggregateInput;
}
