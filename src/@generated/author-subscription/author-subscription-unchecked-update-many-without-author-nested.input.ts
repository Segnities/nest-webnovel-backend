import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorSubscriptionCreateWithoutAuthorInput } from './author-subscription-create-without-author.input';
import { Type } from 'class-transformer';
import { AuthorSubscriptionCreateOrConnectWithoutAuthorInput } from './author-subscription-create-or-connect-without-author.input';
import { AuthorSubscriptionUpsertWithWhereUniqueWithoutAuthorInput } from './author-subscription-upsert-with-where-unique-without-author.input';
import { AuthorSubscriptionCreateManyAuthorInputEnvelope } from './author-subscription-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AuthorSubscriptionWhereUniqueInput } from './author-subscription-where-unique.input';
import { AuthorSubscriptionUpdateWithWhereUniqueWithoutAuthorInput } from './author-subscription-update-with-where-unique-without-author.input';
import { AuthorSubscriptionUpdateManyWithWhereWithoutAuthorInput } from './author-subscription-update-many-with-where-without-author.input';
import { AuthorSubscriptionScalarWhereInput } from './author-subscription-scalar-where.input';

@InputType()
export class AuthorSubscriptionUncheckedUpdateManyWithoutAuthorNestedInput {

    @Field(() => [AuthorSubscriptionCreateWithoutAuthorInput], {nullable:true})
    @Type(() => AuthorSubscriptionCreateWithoutAuthorInput)
    create?: Array<AuthorSubscriptionCreateWithoutAuthorInput>;

    @Field(() => [AuthorSubscriptionCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => AuthorSubscriptionCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<AuthorSubscriptionCreateOrConnectWithoutAuthorInput>;

    @Field(() => [AuthorSubscriptionUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => AuthorSubscriptionUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<AuthorSubscriptionUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => AuthorSubscriptionCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => AuthorSubscriptionCreateManyAuthorInputEnvelope)
    createMany?: AuthorSubscriptionCreateManyAuthorInputEnvelope;

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

    @Field(() => [AuthorSubscriptionUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => AuthorSubscriptionUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<AuthorSubscriptionUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [AuthorSubscriptionUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => AuthorSubscriptionUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<AuthorSubscriptionUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [AuthorSubscriptionScalarWhereInput], {nullable:true})
    @Type(() => AuthorSubscriptionScalarWhereInput)
    deleteMany?: Array<AuthorSubscriptionScalarWhereInput>;
}
