import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookmarkCreateWithoutUserInput } from './bookmark-create-without-user.input';
import { Type } from 'class-transformer';
import { BookmarkCreateOrConnectWithoutUserInput } from './bookmark-create-or-connect-without-user.input';
import { BookmarkUpsertWithWhereUniqueWithoutUserInput } from './bookmark-upsert-with-where-unique-without-user.input';
import { BookmarkCreateManyUserInputEnvelope } from './bookmark-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BookmarkWhereUniqueInput } from './bookmark-where-unique.input';
import { BookmarkUpdateWithWhereUniqueWithoutUserInput } from './bookmark-update-with-where-unique-without-user.input';
import { BookmarkUpdateManyWithWhereWithoutUserInput } from './bookmark-update-many-with-where-without-user.input';
import { BookmarkScalarWhereInput } from './bookmark-scalar-where.input';

@InputType()
export class BookmarkUpdateManyWithoutUserNestedInput {

    @Field(() => [BookmarkCreateWithoutUserInput], {nullable:true})
    @Type(() => BookmarkCreateWithoutUserInput)
    create?: Array<BookmarkCreateWithoutUserInput>;

    @Field(() => [BookmarkCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => BookmarkCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<BookmarkCreateOrConnectWithoutUserInput>;

    @Field(() => [BookmarkUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => BookmarkUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<BookmarkUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => BookmarkCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => BookmarkCreateManyUserInputEnvelope)
    createMany?: BookmarkCreateManyUserInputEnvelope;

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

    @Field(() => [BookmarkUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => BookmarkUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<BookmarkUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [BookmarkUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => BookmarkUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<BookmarkUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [BookmarkScalarWhereInput], {nullable:true})
    @Type(() => BookmarkScalarWhereInput)
    deleteMany?: Array<BookmarkScalarWhereInput>;
}
