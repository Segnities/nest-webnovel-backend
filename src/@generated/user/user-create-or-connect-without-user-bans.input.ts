import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserBansInput } from './user-create-without-user-bans.input';

@InputType()
export class UserCreateOrConnectWithoutUserBansInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserCreateWithoutUserBansInput, {nullable:false})
    @Type(() => UserCreateWithoutUserBansInput)
    create!: UserCreateWithoutUserBansInput;
}
