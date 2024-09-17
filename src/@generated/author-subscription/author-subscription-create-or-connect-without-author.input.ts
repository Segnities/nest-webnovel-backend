import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AuthorSubscriptionWhereUniqueInput } from './author-subscription-where-unique.input';
import { Type } from 'class-transformer';
import { AuthorSubscriptionCreateWithoutAuthorInput } from './author-subscription-create-without-author.input';

@InputType()
export class AuthorSubscriptionCreateOrConnectWithoutAuthorInput {

    @Field(() => AuthorSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => AuthorSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<AuthorSubscriptionWhereUniqueInput, 'id'>;

    @Field(() => AuthorSubscriptionCreateWithoutAuthorInput, {nullable:false})
    @Type(() => AuthorSubscriptionCreateWithoutAuthorInput)
    create!: AuthorSubscriptionCreateWithoutAuthorInput;
}
