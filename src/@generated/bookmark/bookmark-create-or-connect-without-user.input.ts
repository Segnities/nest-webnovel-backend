import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookmarkWhereUniqueInput } from './bookmark-where-unique.input';
import { Type } from 'class-transformer';
import { BookmarkCreateWithoutUserInput } from './bookmark-create-without-user.input';

@InputType()
export class BookmarkCreateOrConnectWithoutUserInput {

    @Field(() => BookmarkWhereUniqueInput, {nullable:false})
    @Type(() => BookmarkWhereUniqueInput)
    where!: Prisma.AtLeast<BookmarkWhereUniqueInput, 'id'>;

    @Field(() => BookmarkCreateWithoutUserInput, {nullable:false})
    @Type(() => BookmarkCreateWithoutUserInput)
    create!: BookmarkCreateWithoutUserInput;
}
