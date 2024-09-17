import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAuthorSubscriptionInput } from './user-update-without-author-subscription.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAuthorSubscriptionInput } from './user-create-without-author-subscription.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutAuthorSubscriptionInput {

    @Field(() => UserUpdateWithoutAuthorSubscriptionInput, {nullable:false})
    @Type(() => UserUpdateWithoutAuthorSubscriptionInput)
    update!: UserUpdateWithoutAuthorSubscriptionInput;

    @Field(() => UserCreateWithoutAuthorSubscriptionInput, {nullable:false})
    @Type(() => UserCreateWithoutAuthorSubscriptionInput)
    create!: UserCreateWithoutAuthorSubscriptionInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
