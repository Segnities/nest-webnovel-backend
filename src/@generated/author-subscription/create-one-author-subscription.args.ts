import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorSubscriptionCreateInput } from './author-subscription-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAuthorSubscriptionArgs {

    @Field(() => AuthorSubscriptionCreateInput, {nullable:false})
    @Type(() => AuthorSubscriptionCreateInput)
    data!: AuthorSubscriptionCreateInput;
}
