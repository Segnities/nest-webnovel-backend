import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class AlternativeTitleScalarWhereWithAggregatesInput {

    @Field(() => [AlternativeTitleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AlternativeTitleScalarWhereWithAggregatesInput>;

    @Field(() => [AlternativeTitleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AlternativeTitleScalarWhereWithAggregatesInput>;

    @Field(() => [AlternativeTitleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AlternativeTitleScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    novelId?: IntWithAggregatesFilter;
}
