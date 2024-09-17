import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelSubscriptionCreateWithoutUserInput } from './novel-subscription-create-without-user.input';
import { Type } from 'class-transformer';
import { NovelSubscriptionCreateOrConnectWithoutUserInput } from './novel-subscription-create-or-connect-without-user.input';
import { NovelSubscriptionCreateManyUserInputEnvelope } from './novel-subscription-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NovelSubscriptionWhereUniqueInput } from './novel-subscription-where-unique.input';

@InputType()
export class NovelSubscriptionUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [NovelSubscriptionCreateWithoutUserInput], {nullable:true})
    @Type(() => NovelSubscriptionCreateWithoutUserInput)
    create?: Array<NovelSubscriptionCreateWithoutUserInput>;

    @Field(() => [NovelSubscriptionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => NovelSubscriptionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<NovelSubscriptionCreateOrConnectWithoutUserInput>;

    @Field(() => NovelSubscriptionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => NovelSubscriptionCreateManyUserInputEnvelope)
    createMany?: NovelSubscriptionCreateManyUserInputEnvelope;

    @Field(() => [NovelSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => NovelSubscriptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NovelSubscriptionWhereUniqueInput, 'id'>>;
}
