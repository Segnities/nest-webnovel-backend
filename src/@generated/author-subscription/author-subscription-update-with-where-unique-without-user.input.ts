import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AuthorSubscriptionWhereUniqueInput } from './author-subscription-where-unique.input';
import { Type } from 'class-transformer';
import { AuthorSubscriptionUpdateWithoutUserInput } from './author-subscription-update-without-user.input';

@InputType()
export class AuthorSubscriptionUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => AuthorSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => AuthorSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<AuthorSubscriptionWhereUniqueInput, 'id'>;

    @Field(() => AuthorSubscriptionUpdateWithoutUserInput, {nullable:false})
    @Type(() => AuthorSubscriptionUpdateWithoutUserInput)
    data!: AuthorSubscriptionUpdateWithoutUserInput;
}
