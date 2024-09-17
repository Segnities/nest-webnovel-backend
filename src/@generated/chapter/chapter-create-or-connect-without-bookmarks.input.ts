import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChapterWhereUniqueInput } from './chapter-where-unique.input';
import { Type } from 'class-transformer';
import { ChapterCreateWithoutBookmarksInput } from './chapter-create-without-bookmarks.input';

@InputType()
export class ChapterCreateOrConnectWithoutBookmarksInput {

    @Field(() => ChapterWhereUniqueInput, {nullable:false})
    @Type(() => ChapterWhereUniqueInput)
    where!: Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>;

    @Field(() => ChapterCreateWithoutBookmarksInput, {nullable:false})
    @Type(() => ChapterCreateWithoutBookmarksInput)
    create!: ChapterCreateWithoutBookmarksInput;
}
