import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUsersRatingsInput } from './user-create-without-users-ratings.input';

@InputType()
export class UserCreateOrConnectWithoutUsersRatingsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserCreateWithoutUsersRatingsInput, {nullable:false})
    @Type(() => UserCreateWithoutUsersRatingsInput)
    create!: UserCreateWithoutUsersRatingsInput;
}
