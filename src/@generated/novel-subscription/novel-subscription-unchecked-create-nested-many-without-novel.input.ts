import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelSubscriptionCreateWithoutNovelInput } from './novel-subscription-create-without-novel.input';
import { Type } from 'class-transformer';
import { NovelSubscriptionCreateOrConnectWithoutNovelInput } from './novel-subscription-create-or-connect-without-novel.input';
import { NovelSubscriptionCreateManyNovelInputEnvelope } from './novel-subscription-create-many-novel-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NovelSubscriptionWhereUniqueInput } from './novel-subscription-where-unique.input';

@InputType()
export class NovelSubscriptionUncheckedCreateNestedManyWithoutNovelInput {

    @Field(() => [NovelSubscriptionCreateWithoutNovelInput], {nullable:true})
    @Type(() => NovelSubscriptionCreateWithoutNovelInput)
    create?: Array<NovelSubscriptionCreateWithoutNovelInput>;

    @Field(() => [NovelSubscriptionCreateOrConnectWithoutNovelInput], {nullable:true})
    @Type(() => NovelSubscriptionCreateOrConnectWithoutNovelInput)
    connectOrCreate?: Array<NovelSubscriptionCreateOrConnectWithoutNovelInput>;

    @Field(() => NovelSubscriptionCreateManyNovelInputEnvelope, {nullable:true})
    @Type(() => NovelSubscriptionCreateManyNovelInputEnvelope)
    createMany?: NovelSubscriptionCreateManyNovelInputEnvelope;

    @Field(() => [NovelSubscriptionWhereUniqueInput], {nullable:true})
    @Type(() => NovelSubscriptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NovelSubscriptionWhereUniqueInput, 'id'>>;
}
