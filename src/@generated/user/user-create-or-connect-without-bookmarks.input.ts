import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutBookmarksInput } from './user-create-without-bookmarks.input';

@InputType()
export class UserCreateOrConnectWithoutBookmarksInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserCreateWithoutBookmarksInput, {nullable:false})
    @Type(() => UserCreateWithoutBookmarksInput)
    create!: UserCreateWithoutBookmarksInput;
}
