import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CommendableTypeCountOrderByAggregateInput } from './commendable-type-count-order-by-aggregate.input';
import { CommendableTypeAvgOrderByAggregateInput } from './commendable-type-avg-order-by-aggregate.input';
import { CommendableTypeMaxOrderByAggregateInput } from './commendable-type-max-order-by-aggregate.input';
import { CommendableTypeMinOrderByAggregateInput } from './commendable-type-min-order-by-aggregate.input';
import { CommendableTypeSumOrderByAggregateInput } from './commendable-type-sum-order-by-aggregate.input';

@InputType()
export class CommendableTypeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => CommendableTypeCountOrderByAggregateInput, {nullable:true})
    _count?: CommendableTypeCountOrderByAggregateInput;

    @Field(() => CommendableTypeAvgOrderByAggregateInput, {nullable:true})
    _avg?: CommendableTypeAvgOrderByAggregateInput;

    @Field(() => CommendableTypeMaxOrderByAggregateInput, {nullable:true})
    _max?: CommendableTypeMaxOrderByAggregateInput;

    @Field(() => CommendableTypeMinOrderByAggregateInput, {nullable:true})
    _min?: CommendableTypeMinOrderByAggregateInput;

    @Field(() => CommendableTypeSumOrderByAggregateInput, {nullable:true})
    _sum?: CommendableTypeSumOrderByAggregateInput;
}
