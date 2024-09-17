import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelSubscriptionWhereUniqueInput } from './novel-subscription-where-unique.input';
import { Type } from 'class-transformer';
import { NovelSubscriptionCreateWithoutNovelInput } from './novel-subscription-create-without-novel.input';

@InputType()
export class NovelSubscriptionCreateOrConnectWithoutNovelInput {

    @Field(() => NovelSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => NovelSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<NovelSubscriptionWhereUniqueInput, 'id'>;

    @Field(() => NovelSubscriptionCreateWithoutNovelInput, {nullable:false})
    @Type(() => NovelSubscriptionCreateWithoutNovelInput)
    create!: NovelSubscriptionCreateWithoutNovelInput;
}
