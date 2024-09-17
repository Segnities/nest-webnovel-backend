import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutAuthorSubscriptionInput } from '../user/user-create-nested-one-without-author-subscription.input';

@InputType()
export class AuthorSubscriptionCreateWithoutAuthorInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutAuthorSubscriptionInput, {nullable:false})
    user!: UserCreateNestedOneWithoutAuthorSubscriptionInput;
}
