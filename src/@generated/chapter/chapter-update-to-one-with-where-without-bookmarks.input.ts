import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterWhereInput } from './chapter-where.input';
import { Type } from 'class-transformer';
import { ChapterUpdateWithoutBookmarksInput } from './chapter-update-without-bookmarks.input';

@InputType()
export class ChapterUpdateToOneWithWhereWithoutBookmarksInput {

    @Field(() => ChapterWhereInput, {nullable:true})
    @Type(() => ChapterWhereInput)
    where?: ChapterWhereInput;

    @Field(() => ChapterUpdateWithoutBookmarksInput, {nullable:false})
    @Type(() => ChapterUpdateWithoutBookmarksInput)
    data!: ChapterUpdateWithoutBookmarksInput;
}
