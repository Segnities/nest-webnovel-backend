import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutBookmarksNestedInput } from '../user/user-update-one-required-without-bookmarks-nested.input';

@InputType()
export class BookmarkUpdateWithoutChapterInput {

    @Field(() => UserUpdateOneRequiredWithoutBookmarksNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput;
}
