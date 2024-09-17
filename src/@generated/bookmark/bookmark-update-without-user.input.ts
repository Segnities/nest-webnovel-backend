import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterUpdateOneRequiredWithoutBookmarksNestedInput } from '../chapter/chapter-update-one-required-without-bookmarks-nested.input';

@InputType()
export class BookmarkUpdateWithoutUserInput {

    @Field(() => ChapterUpdateOneRequiredWithoutBookmarksNestedInput, {nullable:true})
    chapter?: ChapterUpdateOneRequiredWithoutBookmarksNestedInput;
}
