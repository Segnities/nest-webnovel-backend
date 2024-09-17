import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookmarkWhereUniqueInput } from './bookmark-where-unique.input';
import { Type } from 'class-transformer';
import { BookmarkUpdateWithoutUserInput } from './bookmark-update-without-user.input';

@InputType()
export class BookmarkUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => BookmarkWhereUniqueInput, {nullable:false})
    @Type(() => BookmarkWhereUniqueInput)
    where!: Prisma.AtLeast<BookmarkWhereUniqueInput, 'id'>;

    @Field(() => BookmarkUpdateWithoutUserInput, {nullable:false})
    @Type(() => BookmarkUpdateWithoutUserInput)
    data!: BookmarkUpdateWithoutUserInput;
}
