import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookmarkWhereUniqueInput } from './bookmark-where-unique.input';
import { Type } from 'class-transformer';
import { BookmarkUpdateWithoutChapterInput } from './bookmark-update-without-chapter.input';

@InputType()
export class BookmarkUpdateWithWhereUniqueWithoutChapterInput {

    @Field(() => BookmarkWhereUniqueInput, {nullable:false})
    @Type(() => BookmarkWhereUniqueInput)
    where!: Prisma.AtLeast<BookmarkWhereUniqueInput, 'id'>;

    @Field(() => BookmarkUpdateWithoutChapterInput, {nullable:false})
    @Type(() => BookmarkUpdateWithoutChapterInput)
    data!: BookmarkUpdateWithoutChapterInput;
}
