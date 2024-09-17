import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BanOrderByRelationAggregateInput } from '../ban/ban-order-by-relation-aggregate.input';
import { AppelaReasonOrderByWithRelationInput } from '../appela-reason/appela-reason-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class AppealOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    body?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    appealReasonId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewedBy?: keyof typeof SortOrder;

    @Field(() => BanOrderByRelationAggregateInput, {nullable:true})
    bans?: BanOrderByRelationAggregateInput;

    @Field(() => AppelaReasonOrderByWithRelationInput, {nullable:true})
    appeal?: AppelaReasonOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    reviewedByUser?: UserOrderByWithRelationInput;
}
