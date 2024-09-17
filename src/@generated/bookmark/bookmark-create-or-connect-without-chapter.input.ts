import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookmarkWhereUniqueInput } from './bookmark-where-unique.input';
import { Type } from 'class-transformer';
import { BookmarkCreateWithoutChapterInput } from './bookmark-create-without-chapter.input';

@InputType()
export class BookmarkCreateOrConnectWithoutChapterInput {

    @Field(() => BookmarkWhereUniqueInput, {nullable:false})
    @Type(() => BookmarkWhereUniqueInput)
    where!: Prisma.AtLeast<BookmarkWhereUniqueInput, 'id'>;

    @Field(() => BookmarkCreateWithoutChapterInput, {nullable:false})
    @Type(() => BookmarkCreateWithoutChapterInput)
    create!: BookmarkCreateWithoutChapterInput;
}
