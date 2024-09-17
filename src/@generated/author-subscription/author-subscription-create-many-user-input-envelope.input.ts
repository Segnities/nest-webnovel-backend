import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorSubscriptionCreateManyUserInput } from './author-subscription-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class AuthorSubscriptionCreateManyUserInputEnvelope {

    @Field(() => [AuthorSubscriptionCreateManyUserInput], {nullable:false})
    @Type(() => AuthorSubscriptionCreateManyUserInput)
    data!: Array<AuthorSubscriptionCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
