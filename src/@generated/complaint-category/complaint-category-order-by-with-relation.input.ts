import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ComplaintTargetTypeOrderByRelationAggregateInput } from '../complaint-target-type/complaint-target-type-order-by-relation-aggregate.input';

@InputType()
export class ComplaintCategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => ComplaintTargetTypeOrderByRelationAggregateInput, {nullable:true})
    complaintTargetTypes?: ComplaintTargetTypeOrderByRelationAggregateInput;
}
