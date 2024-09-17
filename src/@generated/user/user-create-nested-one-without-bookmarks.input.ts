import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBookmarksInput } from './user-create-without-bookmarks.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBookmarksInput } from './user-create-or-connect-without-bookmarks.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutBookmarksInput {

    @Field(() => UserCreateWithoutBookmarksInput, {nullable:true})
    @Type(() => UserCreateWithoutBookmarksInput)
    create?: UserCreateWithoutBookmarksInput;

    @Field(() => UserCreateOrConnectWithoutBookmarksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBookmarksInput)
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
