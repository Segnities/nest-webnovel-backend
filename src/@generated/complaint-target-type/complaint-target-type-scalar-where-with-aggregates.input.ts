import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ComplaintTargetTypeScalarWhereWithAggregatesInput {

    @Field(() => [ComplaintTargetTypeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ComplaintTargetTypeScalarWhereWithAggregatesInput>;

    @Field(() => [ComplaintTargetTypeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ComplaintTargetTypeScalarWhereWithAggregatesInput>;

    @Field(() => [ComplaintTargetTypeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ComplaintTargetTypeScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    complaintCategoryId?: IntWithAggregatesFilter;
}
