import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterCreateWithoutBookmarksInput } from './chapter-create-without-bookmarks.input';
import { Type } from 'class-transformer';
import { ChapterCreateOrConnectWithoutBookmarksInput } from './chapter-create-or-connect-without-bookmarks.input';
import { ChapterUpsertWithoutBookmarksInput } from './chapter-upsert-without-bookmarks.input';
import { Prisma } from '@prisma/client';
import { ChapterWhereUniqueInput } from './chapter-where-unique.input';
import { ChapterUpdateToOneWithWhereWithoutBookmarksInput } from './chapter-update-to-one-with-where-without-bookmarks.input';

@InputType()
export class ChapterUpdateOneRequiredWithoutBookmarksNestedInput {

    @Field(() => ChapterCreateWithoutBookmarksInput, {nullable:true})
    @Type(() => ChapterCreateWithoutBookmarksInput)
    create?: ChapterCreateWithoutBookmarksInput;

    @Field(() => ChapterCreateOrConnectWithoutBookmarksInput, {nullable:true})
    @Type(() => ChapterCreateOrConnectWithoutBookmarksInput)
    connectOrCreate?: ChapterCreateOrConnectWithoutBookmarksInput;

    @Field(() => ChapterUpsertWithoutBookmarksInput, {nullable:true})
    @Type(() => ChapterUpsertWithoutBookmarksInput)
    upsert?: ChapterUpsertWithoutBookmarksInput;

    @Field(() => ChapterWhereUniqueInput, {nullable:true})
    @Type(() => ChapterWhereUniqueInput)
    connect?: Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>;

    @Field(() => ChapterUpdateToOneWithWhereWithoutBookmarksInput, {nullable:true})
    @Type(() => ChapterUpdateToOneWithWhereWithoutBookmarksInput)
    update?: ChapterUpdateToOneWithWhereWithoutBookmarksInput;
}
