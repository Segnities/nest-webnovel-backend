import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateNestedOneWithoutAuthorSubscriptionInput } from '../author/author-create-nested-one-without-author-subscription.input';

@InputType()
export class AuthorSubscriptionCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => AuthorCreateNestedOneWithoutAuthorSubscriptionInput, {nullable:false})
    author!: AuthorCreateNestedOneWithoutAuthorSubscriptionInput;
}
