import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutBookmarksInput } from './user-update-without-bookmarks.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutBookmarksInput } from './user-create-without-bookmarks.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutBookmarksInput {

    @Field(() => UserUpdateWithoutBookmarksInput, {nullable:false})
    @Type(() => UserUpdateWithoutBookmarksInput)
    update!: UserUpdateWithoutBookmarksInput;

    @Field(() => UserCreateWithoutBookmarksInput, {nullable:false})
    @Type(() => UserCreateWithoutBookmarksInput)
    create!: UserCreateWithoutBookmarksInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
