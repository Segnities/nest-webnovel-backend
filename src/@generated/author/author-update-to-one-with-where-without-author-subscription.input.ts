import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorWhereInput } from './author-where.input';
import { Type } from 'class-transformer';
import { AuthorUpdateWithoutAuthorSubscriptionInput } from './author-update-without-author-subscription.input';

@InputType()
export class AuthorUpdateToOneWithWhereWithoutAuthorSubscriptionInput {

    @Field(() => AuthorWhereInput, {nullable:true})
    @Type(() => AuthorWhereInput)
    where?: AuthorWhereInput;

    @Field(() => AuthorUpdateWithoutAuthorSubscriptionInput, {nullable:false})
    @Type(() => AuthorUpdateWithoutAuthorSubscriptionInput)
    data!: AuthorUpdateWithoutAuthorSubscriptionInput;
}
