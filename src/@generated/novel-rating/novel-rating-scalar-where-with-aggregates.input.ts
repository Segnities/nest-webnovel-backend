import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';

@InputType()
export class NovelRatingScalarWhereWithAggregatesInput {

    @Field(() => [NovelRatingScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NovelRatingScalarWhereWithAggregatesInput>;

    @Field(() => [NovelRatingScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NovelRatingScalarWhereWithAggregatesInput>;

    @Field(() => [NovelRatingScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NovelRatingScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    votesCount?: IntWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    avgRating?: FloatWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    totalRating?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    novelId?: IntWithAggregatesFilter;
}
