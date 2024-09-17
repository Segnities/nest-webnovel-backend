import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class BookmarkScalarWhereWithAggregatesInput {

    @Field(() => [BookmarkScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BookmarkScalarWhereWithAggregatesInput>;

    @Field(() => [BookmarkScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BookmarkScalarWhereWithAggregatesInput>;

    @Field(() => [BookmarkScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BookmarkScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    chapterId?: IntWithAggregatesFilter;
}
