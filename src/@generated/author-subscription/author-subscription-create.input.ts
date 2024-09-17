import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutAuthorSubscriptionInput } from '../user/user-create-nested-one-without-author-subscription.input';
import { AuthorCreateNestedOneWithoutAuthorSubscriptionInput } from '../author/author-create-nested-one-without-author-subscription.input';

@InputType()
export class AuthorSubscriptionCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutAuthorSubscriptionInput, {nullable:false})
    user!: UserCreateNestedOneWithoutAuthorSubscriptionInput;

    @Field(() => AuthorCreateNestedOneWithoutAuthorSubscriptionInput, {nullable:false})
    author!: AuthorCreateNestedOneWithoutAuthorSubscriptionInput;
}
