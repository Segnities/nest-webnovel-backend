import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutBookmarksInput } from '../user/user-create-nested-one-without-bookmarks.input';
import { ChapterCreateNestedOneWithoutBookmarksInput } from '../chapter/chapter-create-nested-one-without-bookmarks.input';

@InputType()
export class BookmarkCreateInput {

    @Field(() => UserCreateNestedOneWithoutBookmarksInput, {nullable:false})
    user!: UserCreateNestedOneWithoutBookmarksInput;

    @Field(() => ChapterCreateNestedOneWithoutBookmarksInput, {nullable:false})
    chapter!: ChapterCreateNestedOneWithoutBookmarksInput;
}
