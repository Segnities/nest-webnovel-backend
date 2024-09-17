import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelSubscriptionCreateWithoutNovelInput } from './novel-subscription-create-without-novel.input';
import { Type } from 'class-transformer';
import { NovelSubscriptionCreateOrConnectWithoutNovelInput } from './novel-subscription-create-or-connect-without-novel.input';
import { NovelSubscriptionUpsertWithWhereUniqueWithoutNovelInput } from './novel-subscription-upsert-with-where-unique-without-novel.input';
import { NovelSubscriptionCreateManyNovelInputEnvelope } from './novel-subscription-create-many-novel-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NovelSubscriptionWhereUniqueInput } from './novel-subscription-where-unique.input';
import { NovelSubscriptionUpdateWithWhereUniqueWithoutNovelInput } from './novel-subscription-update-with-where-unique-without-novel.input';
import { NovelSubscriptionUpdateManyWithWhereWithoutNovelInput } from './novel-subscription-update-many-with-where-without-novel.input';
import { NovelSubscriptionScalarWhereInput } from './novel-subscription-scalar-where.input';

@InputType()
export class NovelSubscriptionUpdateManyWithoutNovelNestedInput {

    @Field(() => [NovelSubscriptionCreateWithoutNovelInput], {nullable:true})
    @Type(() => NovelSubscriptionCreateWithoutNovelInput)
    create?: Array<NovelSubscriptionCreateWithoutNovelInput>;

    @Field(() => [NovelSubscriptionCreateOrConnectWithoutNovelInput], {nullable:true})
    @Type(() => NovelSubscriptionCreateOrConnectWithoutNovelInput)
    connectOrCreate?: Array<NovelSubscriptionCreateOrConnectWithoutNovelInput>;

    @Field(() => [NovelSubscriptionUpsertWithWhereUniqueWithoutNovelInput], {nullable:true})
    @Type(() => NovelSubscriptionUpsertWithWhereUniqueWithoutNovelInput)
    upsert?: Array<NovelSubscriptionUpsertWithWhereUniqueWithoutNovelInput>;

    @Field(() => NovelSubscriptionCreateManyNovelInputEnvelope, {nullable:true})
    @Type(() => NovelSubscriptionCreateManyNovelInputEnvelope)
    createMany?: NovelSubscriptionCreateManyNovelInputEnvelope;

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

    @Field(() => [NovelSubscriptionUpdateWithWhereUniqueWithoutNovelInput], {nullable:true})
    @Type(() => NovelSubscriptionUpdateWithWhereUniqueWithoutNovelInput)
    update?: Array<NovelSubscriptionUpdateWithWhereUniqueWithoutNovelInput>;

    @Field(() => [NovelSubscriptionUpdateManyWithWhereWithoutNovelInput], {nullable:true})
    @Type(() => NovelSubscriptionUpdateManyWithWhereWithoutNovelInput)
    updateMany?: Array<NovelSubscriptionUpdateManyWithWhereWithoutNovelInput>;

    @Field(() => [NovelSubscriptionScalarWhereInput], {nullable:true})
    @Type(() => NovelSubscriptionScalarWhereInput)
    deleteMany?: Array<NovelSubscriptionScalarWhereInput>;
}
