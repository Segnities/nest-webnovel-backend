import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserComplaintOrderByRelationAggregateInput } from '../user-complaint/user-complaint-order-by-relation-aggregate.input';
import { ContentComplaintOrderByRelationAggregateInput } from '../content-complaint/content-complaint-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class ComplaintReasonOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => UserComplaintOrderByRelationAggregateInput, {nullable:true})
    userComplaints?: UserComplaintOrderByRelationAggregateInput;

    @Field(() => ContentComplaintOrderByRelationAggregateInput, {nullable:true})
    contentComplaints?: ContentComplaintOrderByRelationAggregateInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    User?: UserOrderByWithRelationInput;
}
