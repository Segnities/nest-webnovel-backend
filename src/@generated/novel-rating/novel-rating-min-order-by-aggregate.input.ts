import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class NovelRatingMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    votesCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avgRating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalRating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    novelId?: keyof typeof SortOrder;
}
