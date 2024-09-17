import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterUpdateWithoutBookmarksInput } from './chapter-update-without-bookmarks.input';
import { Type } from 'class-transformer';
import { ChapterCreateWithoutBookmarksInput } from './chapter-create-without-bookmarks.input';
import { ChapterWhereInput } from './chapter-where.input';

@InputType()
export class ChapterUpsertWithoutBookmarksInput {

    @Field(() => ChapterUpdateWithoutBookmarksInput, {nullable:false})
    @Type(() => ChapterUpdateWithoutBookmarksInput)
    update!: ChapterUpdateWithoutBookmarksInput;

    @Field(() => ChapterCreateWithoutBookmarksInput, {nullable:false})
    @Type(() => ChapterCreateWithoutBookmarksInput)
    create!: ChapterCreateWithoutBookmarksInput;

    @Field(() => ChapterWhereInput, {nullable:true})
    @Type(() => ChapterWhereInput)
    where?: ChapterWhereInput;
}
