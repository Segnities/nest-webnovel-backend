import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { Type } from 'class-transformer';
import { AuthorCreateWithoutAuthorSubscriptionInput } from './author-create-without-author-subscription.input';

@InputType()
export class AuthorCreateOrConnectWithoutAuthorSubscriptionInput {

    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    @Type(() => AuthorWhereUniqueInput)
    where!: Prisma.AtLeast<AuthorWhereUniqueInput, 'id' | 'name'>;

    @Field(() => AuthorCreateWithoutAuthorSubscriptionInput, {nullable:false})
    @Type(() => AuthorCreateWithoutAuthorSubscriptionInput)
    create!: AuthorCreateWithoutAuthorSubscriptionInput;
}
