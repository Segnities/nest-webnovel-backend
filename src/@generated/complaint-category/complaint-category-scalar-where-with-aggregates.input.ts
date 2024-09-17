import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ComplaintCategoryScalarWhereWithAggregatesInput {

    @Field(() => [ComplaintCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ComplaintCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [ComplaintCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ComplaintCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [ComplaintCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ComplaintCategoryScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;
}
