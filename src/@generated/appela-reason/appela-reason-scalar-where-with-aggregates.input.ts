import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class AppelaReasonScalarWhereWithAggregatesInput {

    @Field(() => [AppelaReasonScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AppelaReasonScalarWhereWithAggregatesInput>;

    @Field(() => [AppelaReasonScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AppelaReasonScalarWhereWithAggregatesInput>;

    @Field(() => [AppelaReasonScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AppelaReasonScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;
}
