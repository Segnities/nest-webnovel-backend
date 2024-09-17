import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutBookmarksInput } from './user-update-without-bookmarks.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutBookmarksInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutBookmarksInput, {nullable:false})
    @Type(() => UserUpdateWithoutBookmarksInput)
    data!: UserUpdateWithoutBookmarksInput;
}
