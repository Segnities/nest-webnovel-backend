import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookmarkCreateWithoutChapterInput } from './bookmark-create-without-chapter.input';
import { Type } from 'class-transformer';
import { BookmarkCreateOrConnectWithoutChapterInput } from './bookmark-create-or-connect-without-chapter.input';
import { BookmarkCreateManyChapterInputEnvelope } from './bookmark-create-many-chapter-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BookmarkWhereUniqueInput } from './bookmark-where-unique.input';

@InputType()
export class BookmarkUncheckedCreateNestedManyWithoutChapterInput {

    @Field(() => [BookmarkCreateWithoutChapterInput], {nullable:true})
    @Type(() => BookmarkCreateWithoutChapterInput)
    create?: Array<BookmarkCreateWithoutChapterInput>;

    @Field(() => [BookmarkCreateOrConnectWithoutChapterInput], {nullable:true})
    @Type(() => BookmarkCreateOrConnectWithoutChapterInput)
    connectOrCreate?: Array<BookmarkCreateOrConnectWithoutChapterInput>;

    @Field(() => BookmarkCreateManyChapterInputEnvelope, {nullable:true})
    @Type(() => BookmarkCreateManyChapterInputEnvelope)
    createMany?: BookmarkCreateManyChapterInputEnvelope;

    @Field(() => [BookmarkWhereUniqueInput], {nullable:true})
    @Type(() => BookmarkWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BookmarkWhereUniqueInput, 'id'>>;
}
