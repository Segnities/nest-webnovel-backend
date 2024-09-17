import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUsersRatingsInput } from './user-create-without-users-ratings.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUsersRatingsInput } from './user-create-or-connect-without-users-ratings.input';
import { UserUpsertWithoutUsersRatingsInput } from './user-upsert-without-users-ratings.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutUsersRatingsInput } from './user-update-to-one-with-where-without-users-ratings.input';

@InputType()
export class UserUpdateOneRequiredWithoutUsersRatingsNestedInput {

    @Field(() => UserCreateWithoutUsersRatingsInput, {nullable:true})
    @Type(() => UserCreateWithoutUsersRatingsInput)
    create?: UserCreateWithoutUsersRatingsInput;

    @Field(() => UserCreateOrConnectWithoutUsersRatingsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUsersRatingsInput)
    connectOrCreate?: UserCreateOrConnectWithoutUsersRatingsInput;

    @Field(() => UserUpsertWithoutUsersRatingsInput, {nullable:true})
    @Type(() => UserUpsertWithoutUsersRatingsInput)
    upsert?: UserUpsertWithoutUsersRatingsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutUsersRatingsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutUsersRatingsInput)
    update?: UserUpdateToOneWithWhereWithoutUsersRatingsInput;
}
