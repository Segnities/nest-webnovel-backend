import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AuthorSubscriptionWhereUniqueInput } from './author-subscription-where-unique.input';
import { Type } from 'class-transformer';
import { AuthorSubscriptionUpdateWithoutAuthorInput } from './author-subscription-update-without-author.input';
import { AuthorSubscriptionCreateWithoutAuthorInput } from './author-subscription-create-without-author.input';

@InputType()
export class AuthorSubscriptionUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => AuthorSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => AuthorSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<AuthorSubscriptionWhereUniqueInput, 'id'>;

    @Field(() => AuthorSubscriptionUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => AuthorSubscriptionUpdateWithoutAuthorInput)
    update!: AuthorSubscriptionUpdateWithoutAuthorInput;

    @Field(() => AuthorSubscriptionCreateWithoutAuthorInput, {nullable:false})
    @Type(() => AuthorSubscriptionCreateWithoutAuthorInput)
    create!: AuthorSubscriptionCreateWithoutAuthorInput;
}
