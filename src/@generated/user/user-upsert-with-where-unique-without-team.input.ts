import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutTeamInput } from './user-update-without-team.input';
import { UserCreateWithoutTeamInput } from './user-create-without-team.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutTeamInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserUpdateWithoutTeamInput, {nullable:false})
    @Type(() => UserUpdateWithoutTeamInput)
    update!: UserUpdateWithoutTeamInput;

    @Field(() => UserCreateWithoutTeamInput, {nullable:false})
    @Type(() => UserCreateWithoutTeamInput)
    create!: UserCreateWithoutTeamInput;
}
