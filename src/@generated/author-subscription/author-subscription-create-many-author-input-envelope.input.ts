import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorSubscriptionCreateManyAuthorInput } from './author-subscription-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class AuthorSubscriptionCreateManyAuthorInputEnvelope {

    @Field(() => [AuthorSubscriptionCreateManyAuthorInput], {nullable:false})
    @Type(() => AuthorSubscriptionCreateManyAuthorInput)
    data!: Array<AuthorSubscriptionCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
