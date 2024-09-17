import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutBookmarksNestedInput } from '../user/user-update-one-required-without-bookmarks-nested.input';
import { ChapterUpdateOneRequiredWithoutBookmarksNestedInput } from '../chapter/chapter-update-one-required-without-bookmarks-nested.input';

@InputType()
export class BookmarkUpdateInput {

    @Field(() => UserUpdateOneRequiredWithoutBookmarksNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput;

    @Field(() => ChapterUpdateOneRequiredWithoutBookmarksNestedInput, {nullable:true})
    chapter?: ChapterUpdateOneRequiredWithoutBookmarksNestedInput;
}
