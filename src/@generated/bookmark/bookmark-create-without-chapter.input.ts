import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutBookmarksInput } from '../user/user-create-nested-one-without-bookmarks.input';

@InputType()
export class BookmarkCreateWithoutChapterInput {

    @Field(() => UserCreateNestedOneWithoutBookmarksInput, {nullable:false})
    user!: UserCreateNestedOneWithoutBookmarksInput;
}
