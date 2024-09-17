import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterCreateWithoutBookmarksInput } from './chapter-create-without-bookmarks.input';
import { Type } from 'class-transformer';
import { ChapterCreateOrConnectWithoutBookmarksInput } from './chapter-create-or-connect-without-bookmarks.input';
import { Prisma } from '@prisma/client';
import { ChapterWhereUniqueInput } from './chapter-where-unique.input';

@InputType()
export class ChapterCreateNestedOneWithoutBookmarksInput {

    @Field(() => ChapterCreateWithoutBookmarksInput, {nullable:true})
    @Type(() => ChapterCreateWithoutBookmarksInput)
    create?: ChapterCreateWithoutBookmarksInput;

    @Field(() => ChapterCreateOrConnectWithoutBookmarksInput, {nullable:true})
    @Type(() => ChapterCreateOrConnectWithoutBookmarksInput)
    connectOrCreate?: ChapterCreateOrConnectWithoutBookmarksInput;

    @Field(() => ChapterWhereUniqueInput, {nullable:true})
    @Type(() => ChapterWhereUniqueInput)
    connect?: Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>;
}
