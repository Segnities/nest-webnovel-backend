import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutIssuedBansInput } from './user-create-without-issued-bans.input';

@InputType()
export class UserCreateOrConnectWithoutIssuedBansInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserCreateWithoutIssuedBansInput, {nullable:false})
    @Type(() => UserCreateWithoutIssuedBansInput)
    create!: UserCreateWithoutIssuedBansInput;
}
