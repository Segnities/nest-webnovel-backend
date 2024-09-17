import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorSubscriptionUpdateInput } from './author-subscription-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AuthorSubscriptionWhereUniqueInput } from './author-subscription-where-unique.input';

@ArgsType()
export class UpdateOneAuthorSubscriptionArgs {

    @Field(() => AuthorSubscriptionUpdateInput, {nullable:false})
    @Type(() => AuthorSubscriptionUpdateInput)
    data!: AuthorSubscriptionUpdateInput;

    @Field(() => AuthorSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => AuthorSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<AuthorSubscriptionWhereUniqueInput, 'id'>;
}
