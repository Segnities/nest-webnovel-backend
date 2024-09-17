import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutNovelsSubscriptionInput } from './user-update-without-novels-subscription.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutNovelsSubscriptionInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutNovelsSubscriptionInput, {nullable:false})
    @Type(() => UserUpdateWithoutNovelsSubscriptionInput)
    data!: UserUpdateWithoutNovelsSubscriptionInput;
}
