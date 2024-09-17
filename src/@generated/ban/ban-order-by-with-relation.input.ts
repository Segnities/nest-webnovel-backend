import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AppealOrderByWithRelationInput } from '../appeal/appeal-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ComplaintTargetTypeOrderByWithRelationInput } from '../complaint-target-type/complaint-target-type-order-by-with-relation.input';

@InputType()
export class BanOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    banStart?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    banEnd?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    appealed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    appealId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    issuedBy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    complaintTargetId?: keyof typeof SortOrder;

    @Field(() => AppealOrderByWithRelationInput, {nullable:true})
    appeal?: AppealOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    issuedByUser?: UserOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => ComplaintTargetTypeOrderByWithRelationInput, {nullable:true})
    complaintTargetType?: ComplaintTargetTypeOrderByWithRelationInput;
}
