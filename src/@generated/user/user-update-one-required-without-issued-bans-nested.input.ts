import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutIssuedBansInput } from './user-create-without-issued-bans.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutIssuedBansInput } from './user-create-or-connect-without-issued-bans.input';
import { UserUpsertWithoutIssuedBansInput } from './user-upsert-without-issued-bans.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutIssuedBansInput } from './user-update-to-one-with-where-without-issued-bans.input';

@InputType()
export class UserUpdateOneRequiredWithoutIssuedBansNestedInput {

    @Field(() => UserCreateWithoutIssuedBansInput, {nullable:true})
    @Type(() => UserCreateWithoutIssuedBansInput)
    create?: UserCreateWithoutIssuedBansInput;

    @Field(() => UserCreateOrConnectWithoutIssuedBansInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutIssuedBansInput)
    connectOrCreate?: UserCreateOrConnectWithoutIssuedBansInput;

    @Field(() => UserUpsertWithoutIssuedBansInput, {nullable:true})
    @Type(() => UserUpsertWithoutIssuedBansInput)
    upsert?: UserUpsertWithoutIssuedBansInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutIssuedBansInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutIssuedBansInput)
    update?: UserUpdateToOneWithWhereWithoutIssuedBansInput;
}
