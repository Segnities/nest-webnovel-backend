import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutUsersRatingsInput } from './user-update-without-users-ratings.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutUsersRatingsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutUsersRatingsInput, {nullable:false})
    @Type(() => UserUpdateWithoutUsersRatingsInput)
    data!: UserUpdateWithoutUsersRatingsInput;
}
