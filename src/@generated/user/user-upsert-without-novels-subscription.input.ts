import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutNovelsSubscriptionInput } from './user-update-without-novels-subscription.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutNovelsSubscriptionInput } from './user-create-without-novels-subscription.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutNovelsSubscriptionInput {

    @Field(() => UserUpdateWithoutNovelsSubscriptionInput, {nullable:false})
    @Type(() => UserUpdateWithoutNovelsSubscriptionInput)
    update!: UserUpdateWithoutNovelsSubscriptionInput;

    @Field(() => UserCreateWithoutNovelsSubscriptionInput, {nullable:false})
    @Type(() => UserCreateWithoutNovelsSubscriptionInput)
    create!: UserCreateWithoutNovelsSubscriptionInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
