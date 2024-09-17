import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookmarkCreateWithoutUserInput } from './bookmark-create-without-user.input';
import { Type } from 'class-transformer';
import { BookmarkCreateOrConnectWithoutUserInput } from './bookmark-create-or-connect-without-user.input';
import { BookmarkCreateManyUserInputEnvelope } from './bookmark-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BookmarkWhereUniqueInput } from './bookmark-where-unique.input';

@InputType()
export class BookmarkCreateNestedManyWithoutUserInput {

    @Field(() => [BookmarkCreateWithoutUserInput], {nullable:true})
    @Type(() => BookmarkCreateWithoutUserInput)
    create?: Array<BookmarkCreateWithoutUserInput>;

    @Field(() => [BookmarkCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => BookmarkCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<BookmarkCreateOrConnectWithoutUserInput>;

    @Field(() => BookmarkCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => BookmarkCreateManyUserInputEnvelope)
    createMany?: BookmarkCreateManyUserInputEnvelope;

    @Field(() => [BookmarkWhereUniqueInput], {nullable:true})
    @Type(() => BookmarkWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BookmarkWhereUniqueInput, 'id'>>;
}
