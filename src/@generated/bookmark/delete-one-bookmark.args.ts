import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookmarkWhereUniqueInput } from './bookmark-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneBookmarkArgs {

    @Field(() => BookmarkWhereUniqueInput, {nullable:false})
    @Type(() => BookmarkWhereUniqueInput)
    where!: Prisma.AtLeast<BookmarkWhereUniqueInput, 'id'>;
}
