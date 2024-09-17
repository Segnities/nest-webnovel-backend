import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorSubscriptionWhereInput } from './author-subscription-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAuthorSubscriptionArgs {

    @Field(() => AuthorSubscriptionWhereInput, {nullable:true})
    @Type(() => AuthorSubscriptionWhereInput)
    where?: AuthorSubscriptionWhereInput;
}
