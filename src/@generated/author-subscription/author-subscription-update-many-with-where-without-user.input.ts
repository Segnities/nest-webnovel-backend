import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorSubscriptionScalarWhereInput } from './author-subscription-scalar-where.input';
import { Type } from 'class-transformer';
import { AuthorSubscriptionUpdateManyMutationInput } from './author-subscription-update-many-mutation.input';

@InputType()
export class AuthorSubscriptionUpdateManyWithWhereWithoutUserInput {

    @Field(() => AuthorSubscriptionScalarWhereInput, {nullable:false})
    @Type(() => AuthorSubscriptionScalarWhereInput)
    where!: AuthorSubscriptionScalarWhereInput;

    @Field(() => AuthorSubscriptionUpdateManyMutationInput, {nullable:false})
    @Type(() => AuthorSubscriptionUpdateManyMutationInput)
    data!: AuthorSubscriptionUpdateManyMutationInput;
}
