import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class GenreScalarWhereWithAggregatesInput {

    @Field(() => [GenreScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GenreScalarWhereWithAggregatesInput>;

    @Field(() => [GenreScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GenreScalarWhereWithAggregatesInput>;

    @Field(() => [GenreScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GenreScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;
}
