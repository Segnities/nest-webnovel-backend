import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ComplaintReasonOrderByWithRelationInput } from '../complaint-reason/complaint-reason-order-by-with-relation.input';
import { ComplaintTargetTypeOrderByWithRelationInput } from '../complaint-target-type/complaint-target-type-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class ContentComplaintOrderByWithRelationInput {

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

    @Field(() => ComplaintReasonOrderByWithRelationInput, {nullable:true})
    complaintReason?: ComplaintReasonOrderByWithRelationInput;

    @Field(() => ComplaintTargetTypeOrderByWithRelationInput, {nullable:true})
    complaintTargetType?: ComplaintTargetTypeOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    issuedByUser?: UserOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    resolvedByUser?: UserOrderByWithRelationInput;
}
