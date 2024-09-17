import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorSubscriptionCreateWithoutUserInput } from './author-subscription-create-without-user.input';
import { Type } from 'class-transformer';
import { AuthorSubscriptionCreateOrConnectWithoutUserInput } from './author-subscription-create-or-connect-without-user.input';
import { AuthorSubscriptionCreateManyUserInputEnvelope } from './author-subscription-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AuthorSubscriptionWhereUniqueInput } from './author-subscription-where-unique.input';

@InputType()
export class AuthorSubscriptionUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [AuthorSubscriptionCreateWithoutUserInput], {nullable:true})
    @Type(() => AuthorSubscriptionCreateWithoutUserInput)
    create?: Array<AuthorSubscriptionCreateWithoutUserInput>;

    @Field(() => [AuthorSubscriptionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AuthorSubscriptionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AuthorSubscriptionCreateOrConnectWithoutUserInput>;

    @Field(() => AuthorSubscriptionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AuthorSubscriptionCreateManyUserInputEnvelope)
    createMany?: AuthorSubscriptionCreateManyUserInputEnvelope;

    @Field(() => [AuthorSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => AuthorSubscriptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AuthorSubscriptionWhereUniqueInput, 'id'>>;
}
