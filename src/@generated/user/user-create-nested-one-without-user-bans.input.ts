import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserBansInput } from './user-create-without-user-bans.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserBansInput } from './user-create-or-connect-without-user-bans.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUserBansInput {

    @Field(() => UserCreateWithoutUserBansInput, {nullable:true})
    @Type(() => UserCreateWithoutUserBansInput)
    create?: UserCreateWithoutUserBansInput;

    @Field(() => UserCreateOrConnectWithoutUserBansInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserBansInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserBansInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
