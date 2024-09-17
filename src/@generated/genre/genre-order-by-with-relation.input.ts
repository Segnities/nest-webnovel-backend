import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NovelOrderByRelationAggregateInput } from '../novel/novel-order-by-relation-aggregate.input';

@InputType()
export class GenreOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => NovelOrderByRelationAggregateInput, {nullable:true})
    novels?: NovelOrderByRelationAggregateInput;
}
