import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAuthorSubscriptionInput } from './user-update-without-author-subscription.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutAuthorSubscriptionInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutAuthorSubscriptionInput, {nullable:false})
    @Type(() => UserUpdateWithoutAuthorSubscriptionInput)
    data!: UserUpdateWithoutAuthorSubscriptionInput;
}
