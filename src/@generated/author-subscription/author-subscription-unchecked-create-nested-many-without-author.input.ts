import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorSubscriptionCreateWithoutAuthorInput } from './author-subscription-create-without-author.input';
import { Type } from 'class-transformer';
import { AuthorSubscriptionCreateOrConnectWithoutAuthorInput } from './author-subscription-create-or-connect-without-author.input';
import { AuthorSubscriptionCreateManyAuthorInputEnvelope } from './author-subscription-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AuthorSubscriptionWhereUniqueInput } from './author-subscription-where-unique.input';

@InputType()
export class AuthorSubscriptionUncheckedCreateNestedManyWithoutAuthorInput {

    @Field(() => [AuthorSubscriptionCreateWithoutAuthorInput], {nullable:true})
    @Type(() => AuthorSubscriptionCreateWithoutAuthorInput)
    create?: Array<AuthorSubscriptionCreateWithoutAuthorInput>;

    @Field(() => [AuthorSubscriptionCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => AuthorSubscriptionCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<AuthorSubscriptionCreateOrConnectWithoutAuthorInput>;

    @Field(() => AuthorSubscriptionCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => AuthorSubscriptionCreateManyAuthorInputEnvelope)
    createMany?: AuthorSubscriptionCreateManyAuthorInputEnvelope;

    @Field(() => [AuthorSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => AuthorSubscriptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AuthorSubscriptionWhereUniqueInput, 'id'>>;
}
