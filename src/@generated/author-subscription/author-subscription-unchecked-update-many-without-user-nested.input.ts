import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorSubscriptionCreateWithoutUserInput } from './author-subscription-create-without-user.input';
import { Type } from 'class-transformer';
import { AuthorSubscriptionCreateOrConnectWithoutUserInput } from './author-subscription-create-or-connect-without-user.input';
import { AuthorSubscriptionUpsertWithWhereUniqueWithoutUserInput } from './author-subscription-upsert-with-where-unique-without-user.input';
import { AuthorSubscriptionCreateManyUserInputEnvelope } from './author-subscription-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AuthorSubscriptionWhereUniqueInput } from './author-subscription-where-unique.input';
import { AuthorSubscriptionUpdateWithWhereUniqueWithoutUserInput } from './author-subscription-update-with-where-unique-without-user.input';
import { AuthorSubscriptionUpdateManyWithWhereWithoutUserInput } from './author-subscription-update-many-with-where-without-user.input';
import { AuthorSubscriptionScalarWhereInput } from './author-subscription-scalar-where.input';

@InputType()
export class AuthorSubscriptionUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [AuthorSubscriptionCreateWithoutUserInput], {nullable:true})
    @Type(() => AuthorSubscriptionCreateWithoutUserInput)
    create?: Array<AuthorSubscriptionCreateWithoutUserInput>;

    @Field(() => [AuthorSubscriptionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AuthorSubscriptionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AuthorSubscriptionCreateOrConnectWithoutUserInput>;

    @Field(() => [AuthorSubscriptionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AuthorSubscriptionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<AuthorSubscriptionUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => AuthorSubscriptionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AuthorSubscriptionCreateManyUserInputEnvelope)
    createMany?: AuthorSubscriptionCreateManyUserInputEnvelope;

    @Field(() => [AuthorSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => AuthorSubscriptionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AuthorSubscriptionWhereUniqueInput, 'id'>>;

    @Field(() => [AuthorSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => AuthorSubscriptionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AuthorSubscriptionWhereUniqueInput, 'id'>>;

    @Field(() => [AuthorSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => AuthorSubscriptionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AuthorSubscriptionWhereUniqueInput, 'id'>>;

    @Field(() => [AuthorSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => AuthorSubscriptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AuthorSubscriptionWhereUniqueInput, 'id'>>;

    @Field(() => [AuthorSubscriptionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AuthorSubscriptionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<AuthorSubscriptionUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [AuthorSubscriptionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => AuthorSubscriptionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<AuthorSubscriptionUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [AuthorSubscriptionScalarWhereInput], {nullable:true})
    @Type(() => AuthorSubscriptionScalarWhereInput)
    deleteMany?: Array<AuthorSubscriptionScalarWhereInput>;
}
