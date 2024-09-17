import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUsersRatingsInput } from './user-create-without-users-ratings.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUsersRatingsInput } from './user-create-or-connect-without-users-ratings.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUsersRatingsInput {

    @Field(() => UserCreateWithoutUsersRatingsInput, {nullable:true})
    @Type(() => UserCreateWithoutUsersRatingsInput)
    create?: UserCreateWithoutUsersRatingsInput;

    @Field(() => UserCreateOrConnectWithoutUsersRatingsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUsersRatingsInput)
    connectOrCreate?: UserCreateOrConnectWithoutUsersRatingsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
