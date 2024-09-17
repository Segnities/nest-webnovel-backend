import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NovelCreateNestedOneWithoutUsersRatingsInput } from '../novel/novel-create-nested-one-without-users-ratings.input';
import { UserCreateNestedOneWithoutUsersRatingsInput } from '../user/user-create-nested-one-without-users-ratings.input';

@InputType()
export class UserRatingCreateInput {

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => NovelCreateNestedOneWithoutUsersRatingsInput, {nullable:false})
    novel!: NovelCreateNestedOneWithoutUsersRatingsInput;

    @Field(() => UserCreateNestedOneWithoutUsersRatingsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUsersRatingsInput;
}
