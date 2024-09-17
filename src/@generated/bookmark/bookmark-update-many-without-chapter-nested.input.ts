import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookmarkCreateWithoutChapterInput } from './bookmark-create-without-chapter.input';
import { Type } from 'class-transformer';
import { BookmarkCreateOrConnectWithoutChapterInput } from './bookmark-create-or-connect-without-chapter.input';
import { BookmarkUpsertWithWhereUniqueWithoutChapterInput } from './bookmark-upsert-with-where-unique-without-chapter.input';
import { BookmarkCreateManyChapterInputEnvelope } from './bookmark-create-many-chapter-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BookmarkWhereUniqueInput } from './bookmark-where-unique.input';
import { BookmarkUpdateWithWhereUniqueWithoutChapterInput } from './bookmark-update-with-where-unique-without-chapter.input';
import { BookmarkUpdateManyWithWhereWithoutChapterInput } from './bookmark-update-many-with-where-without-chapter.input';
import { BookmarkScalarWhereInput } from './bookmark-scalar-where.input';

@InputType()
export class BookmarkUpdateManyWithoutChapterNestedInput {

    @Field(() => [BookmarkCreateWithoutChapterInput], {nullable:true})
    @Type(() => BookmarkCreateWithoutChapterInput)
    create?: Array<BookmarkCreateWithoutChapterInput>;

    @Field(() => [BookmarkCreateOrConnectWithoutChapterInput], {nullable:true})
    @Type(() => BookmarkCreateOrConnectWithoutChapterInput)
    connectOrCreate?: Array<BookmarkCreateOrConnectWithoutChapterInput>;

    @Field(() => [BookmarkUpsertWithWhereUniqueWithoutChapterInput], {nullable:true})
    @Type(() => BookmarkUpsertWithWhereUniqueWithoutChapterInput)
    upsert?: Array<BookmarkUpsertWithWhereUniqueWithoutChapterInput>;

    @Field(() => BookmarkCreateManyChapterInputEnvelope, {nullable:true})
    @Type(() => BookmarkCreateManyChapterInputEnvelope)
    createMany?: BookmarkCreateManyChapterInputEnvelope;

    @Field(() => [BookmarkWhereUniqueInput], {nullable:true})
    @Type(() => BookmarkWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BookmarkWhereUniqueInput, 'id'>>;

    @Field(() => [BookmarkWhereUniqueInput], {nullable:true})
    @Type(() => BookmarkWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BookmarkWhereUniqueInput, 'id'>>;

    @Field(() => [BookmarkWhereUniqueInput], {nullable:true})
    @Type(() => BookmarkWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BookmarkWhereUniqueInput, 'id'>>;

    @Field(() => [BookmarkWhereUniqueInput], {nullable:true})
    @Type(() => BookmarkWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BookmarkWhereUniqueInput, 'id'>>;

    @Field(() => [BookmarkUpdateWithWhereUniqueWithoutChapterInput], {nullable:true})
    @Type(() => BookmarkUpdateWithWhereUniqueWithoutChapterInput)
    update?: Array<BookmarkUpdateWithWhereUniqueWithoutChapterInput>;

    @Field(() => [BookmarkUpdateManyWithWhereWithoutChapterInput], {nullable:true})
    @Type(() => BookmarkUpdateManyWithWhereWithoutChapterInput)
    updateMany?: Array<BookmarkUpdateManyWithWhereWithoutChapterInput>;

    @Field(() => [BookmarkScalarWhereInput], {nullable:true})
    @Type(() => BookmarkScalarWhereInput)
    deleteMany?: Array<BookmarkScalarWhereInput>;
}
