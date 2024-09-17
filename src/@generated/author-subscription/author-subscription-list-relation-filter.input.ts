import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorSubscriptionWhereInput } from './author-subscription-where.input';

@InputType()
export class AuthorSubscriptionListRelationFilter {

    @Field(() => AuthorSubscriptionWhereInput, {nullable:true})
    every?: AuthorSubscriptionWhereInput;

    @Field(() => AuthorSubscriptionWhereInput, {nullable:true})
    some?: AuthorSubscriptionWhereInput;

    @Field(() => AuthorSubscriptionWhereInput, {nullable:true})
    none?: AuthorSubscriptionWhereInput;
}
