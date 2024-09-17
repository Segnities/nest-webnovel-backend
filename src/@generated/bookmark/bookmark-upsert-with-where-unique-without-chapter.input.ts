import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookmarkWhereUniqueInput } from './bookmark-where-unique.input';
import { Type } from 'class-transformer';
import { BookmarkUpdateWithoutChapterInput } from './bookmark-update-without-chapter.input';
import { BookmarkCreateWithoutChapterInput } from './bookmark-create-without-chapter.input';

@InputType()
export class BookmarkUpsertWithWhereUniqueWithoutChapterInput {

    @Field(() => BookmarkWhereUniqueInput, {nullable:false})
    @Type(() => BookmarkWhereUniqueInput)
    where!: Prisma.AtLeast<BookmarkWhereUniqueInput, 'id'>;

    @Field(() => BookmarkUpdateWithoutChapterInput, {nullable:false})
    @Type(() => BookmarkUpdateWithoutChapterInput)
    update!: BookmarkUpdateWithoutChapterInput;

    @Field(() => BookmarkCreateWithoutChapterInput, {nullable:false})
    @Type(() => BookmarkCreateWithoutChapterInput)
    create!: BookmarkCreateWithoutChapterInput;
}
