import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AuthorSubscriptionWhereUniqueInput } from './author-subscription-where-unique.input';
import { Type } from 'class-transformer';
import { AuthorSubscriptionCreateInput } from './author-subscription-create.input';
import { AuthorSubscriptionUpdateInput } from './author-subscription-update.input';

@ArgsType()
export class UpsertOneAuthorSubscriptionArgs {

    @Field(() => AuthorSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => AuthorSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<AuthorSubscriptionWhereUniqueInput, 'id'>;

    @Field(() => AuthorSubscriptionCreateInput, {nullable:false})
    @Type(() => AuthorSubscriptionCreateInput)
    create!: AuthorSubscriptionCreateInput;

    @Field(() => AuthorSubscriptionUpdateInput, {nullable:false})
    @Type(() => AuthorSubscriptionUpdateInput)
    update!: AuthorSubscriptionUpdateInput;
}
