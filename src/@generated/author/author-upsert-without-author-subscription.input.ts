import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUpdateWithoutAuthorSubscriptionInput } from './author-update-without-author-subscription.input';
import { Type } from 'class-transformer';
import { AuthorCreateWithoutAuthorSubscriptionInput } from './author-create-without-author-subscription.input';
import { AuthorWhereInput } from './author-where.input';

@InputType()
export class AuthorUpsertWithoutAuthorSubscriptionInput {

    @Field(() => AuthorUpdateWithoutAuthorSubscriptionInput, {nullable:false})
    @Type(() => AuthorUpdateWithoutAuthorSubscriptionInput)
    update!: AuthorUpdateWithoutAuthorSubscriptionInput;

    @Field(() => AuthorCreateWithoutAuthorSubscriptionInput, {nullable:false})
    @Type(() => AuthorCreateWithoutAuthorSubscriptionInput)
    create!: AuthorCreateWithoutAuthorSubscriptionInput;

    @Field(() => AuthorWhereInput, {nullable:true})
    @Type(() => AuthorWhereInput)
    where?: AuthorWhereInput;
}
