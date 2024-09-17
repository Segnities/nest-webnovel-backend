import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AppealOrderByRelationAggregateInput } from '../appeal/appeal-order-by-relation-aggregate.input';

@InputType()
export class AppelaReasonOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => AppealOrderByRelationAggregateInput, {nullable:true})
    appeals?: AppealOrderByRelationAggregateInput;
}
