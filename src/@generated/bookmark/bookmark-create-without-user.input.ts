import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterCreateNestedOneWithoutBookmarksInput } from '../chapter/chapter-create-nested-one-without-bookmarks.input';

@InputType()
export class BookmarkCreateWithoutUserInput {

    @Field(() => ChapterCreateNestedOneWithoutBookmarksInput, {nullable:false})
    chapter!: ChapterCreateNestedOneWithoutBookmarksInput;
}
