import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutIssuedBansInput } from './user-create-without-issued-bans.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutIssuedBansInput } from './user-create-or-connect-without-issued-bans.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutIssuedBansInput {

    @Field(() => UserCreateWithoutIssuedBansInput, {nullable:true})
    @Type(() => UserCreateWithoutIssuedBansInput)
    create?: UserCreateWithoutIssuedBansInput;

    @Field(() => UserCreateOrConnectWithoutIssuedBansInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutIssuedBansInput)
    connectOrCreate?: UserCreateOrConnectWithoutIssuedBansInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
