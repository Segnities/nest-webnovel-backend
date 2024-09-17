import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelSubscriptionCreateWithoutUserInput } from './novel-subscription-create-without-user.input';
import { Type } from 'class-transformer';
import { NovelSubscriptionCreateOrConnectWithoutUserInput } from './novel-subscription-create-or-connect-without-user.input';
import { NovelSubscriptionUpsertWithWhereUniqueWithoutUserInput } from './novel-subscription-upsert-with-where-unique-without-user.input';
import { NovelSubscriptionCreateManyUserInputEnvelope } from './novel-subscription-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NovelSubscriptionWhereUniqueInput } from './novel-subscription-where-unique.input';
import { NovelSubscriptionUpdateWithWhereUniqueWithoutUserInput } from './novel-subscription-update-with-where-unique-without-user.input';
import { NovelSubscriptionUpdateManyWithWhereWithoutUserInput } from './novel-subscription-update-many-with-where-without-user.input';
import { NovelSubscriptionScalarWhereInput } from './novel-subscription-scalar-where.input';

@InputType()
export class NovelSubscriptionUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [NovelSubscriptionCreateWithoutUserInput], {nullable:true})
    @Type(() => NovelSubscriptionCreateWithoutUserInput)
    create?: Array<NovelSubscriptionCreateWithoutUserInput>;

    @Field(() => [NovelSubscriptionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => NovelSubscriptionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<NovelSubscriptionCreateOrConnectWithoutUserInput>;

    @Field(() => [NovelSubscriptionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => NovelSubscriptionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<NovelSubscriptionUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => NovelSubscriptionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => NovelSubscriptionCreateManyUserInputEnvelope)
    createMany?: NovelSubscriptionCreateManyUserInputEnvelope;

    @Field(() => [NovelSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => NovelSubscriptionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<NovelSubscriptionWhereUniqueInput, 'id'>>;

    @Field(() => [NovelSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => NovelSubscriptionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<NovelSubscriptionWhereUniqueInput, 'id'>>;

    @Field(() => [NovelSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => NovelSubscriptionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<NovelSubscriptionWhereUniqueInput, 'id'>>;

    @Field(() => [NovelSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => NovelSubscriptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NovelSubscriptionWhereUniqueInput, 'id'>>;

    @Field(() => [NovelSubscriptionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => NovelSubscriptionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<NovelSubscriptionUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [NovelSubscriptionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => NovelSubscriptionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<NovelSubscriptionUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [NovelSubscriptionScalarWhereInput], {nullable:true})
    @Type(() => NovelSubscriptionScalarWhereInput)
    deleteMany?: Array<NovelSubscriptionScalarWhereInput>;
}
