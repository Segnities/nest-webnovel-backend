import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorSubscriptionUpdateManyMutationInput } from './author-subscription-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AuthorSubscriptionWhereInput } from './author-subscription-where.input';

@ArgsType()
export class UpdateManyAuthorSubscriptionArgs {

    @Field(() => AuthorSubscriptionUpdateManyMutationInput, {nullable:false})
    @Type(() => AuthorSubscriptionUpdateManyMutationInput)
    data!: AuthorSubscriptionUpdateManyMutationInput;

    @Field(() => AuthorSubscriptionWhereInput, {nullable:true})
    @Type(() => AuthorSubscriptionWhereInput)
    where?: AuthorSubscriptionWhereInput;
}
