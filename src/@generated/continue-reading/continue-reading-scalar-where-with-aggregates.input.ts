import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';

@InputType()
export class ContinueReadingScalarWhereWithAggregatesInput {

    @Field(() => [ContinueReadingScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ContinueReadingScalarWhereWithAggregatesInput>;

    @Field(() => [ContinueReadingScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ContinueReadingScalarWhereWithAggregatesInput>;

    @Field(() => [ContinueReadingScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ContinueReadingScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    progressPercentage?: FloatWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    lastChapterId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    novelId?: IntWithAggregatesFilter;
}
