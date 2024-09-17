import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUsersRatingsInput } from './user-update-without-users-ratings.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUsersRatingsInput } from './user-create-without-users-ratings.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutUsersRatingsInput {

    @Field(() => UserUpdateWithoutUsersRatingsInput, {nullable:false})
    @Type(() => UserUpdateWithoutUsersRatingsInput)
    update!: UserUpdateWithoutUsersRatingsInput;

    @Field(() => UserCreateWithoutUsersRatingsInput, {nullable:false})
    @Type(() => UserCreateWithoutUsersRatingsInput)
    create!: UserCreateWithoutUsersRatingsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
