import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBookmarksInput } from './user-create-without-bookmarks.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBookmarksInput } from './user-create-or-connect-without-bookmarks.input';
import { UserUpsertWithoutBookmarksInput } from './user-upsert-without-bookmarks.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutBookmarksInput } from './user-update-to-one-with-where-without-bookmarks.input';

@InputType()
export class UserUpdateOneRequiredWithoutBookmarksNestedInput {

    @Field(() => UserCreateWithoutBookmarksInput, {nullable:true})
    @Type(() => UserCreateWithoutBookmarksInput)
    create?: UserCreateWithoutBookmarksInput;

    @Field(() => UserCreateOrConnectWithoutBookmarksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBookmarksInput)
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput;

    @Field(() => UserUpsertWithoutBookmarksInput, {nullable:true})
    @Type(() => UserUpsertWithoutBookmarksInput)
    upsert?: UserUpsertWithoutBookmarksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutBookmarksInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutBookmarksInput)
    update?: UserUpdateToOneWithWhereWithoutBookmarksInput;
}
