import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class BookmarkScalarWhereInput {

    @Field(() => [BookmarkScalarWhereInput], {nullable:true})
    AND?: Array<BookmarkScalarWhereInput>;

    @Field(() => [BookmarkScalarWhereInput], {nullable:true})
    OR?: Array<BookmarkScalarWhereInput>;

    @Field(() => [BookmarkScalarWhereInput], {nullable:true})
    NOT?: Array<BookmarkScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    chapterId?: IntFilter;
}
