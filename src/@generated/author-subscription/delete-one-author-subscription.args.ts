import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AuthorSubscriptionWhereUniqueInput } from './author-subscription-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneAuthorSubscriptionArgs {

    @Field(() => AuthorSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => AuthorSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<AuthorSubscriptionWhereUniqueInput, 'id'>;
}
