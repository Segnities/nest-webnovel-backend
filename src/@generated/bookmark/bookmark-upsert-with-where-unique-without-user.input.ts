import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookmarkWhereUniqueInput } from './bookmark-where-unique.input';
import { Type } from 'class-transformer';
import { BookmarkUpdateWithoutUserInput } from './bookmark-update-without-user.input';
import { BookmarkCreateWithoutUserInput } from './bookmark-create-without-user.input';

@InputType()
export class BookmarkUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => BookmarkWhereUniqueInput, {nullable:false})
    @Type(() => BookmarkWhereUniqueInput)
    where!: Prisma.AtLeast<BookmarkWhereUniqueInput, 'id'>;

    @Field(() => BookmarkUpdateWithoutUserInput, {nullable:false})
    @Type(() => BookmarkUpdateWithoutUserInput)
    update!: BookmarkUpdateWithoutUserInput;

    @Field(() => BookmarkCreateWithoutUserInput, {nullable:false})
    @Type(() => BookmarkCreateWithoutUserInput)
    create!: BookmarkCreateWithoutUserInput;
}
