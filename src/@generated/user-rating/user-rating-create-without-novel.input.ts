import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUsersRatingsInput } from '../user/user-create-nested-one-without-users-ratings.input';

@InputType()
export class UserRatingCreateWithoutNovelInput {

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutUsersRatingsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUsersRatingsInput;
}
