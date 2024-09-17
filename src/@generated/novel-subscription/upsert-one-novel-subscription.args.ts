import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelSubscriptionWhereUniqueInput } from './novel-subscription-where-unique.input';
import { Type } from 'class-transformer';
import { NovelSubscriptionCreateInput } from './novel-subscription-create.input';
import { NovelSubscriptionUpdateInput } from './novel-subscription-update.input';

@ArgsType()
export class UpsertOneNovelSubscriptionArgs {

    @Field(() => NovelSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => NovelSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<NovelSubscriptionWhereUniqueInput, 'id'>;

    @Field(() => NovelSubscriptionCreateInput, {nullable:false})
    @Type(() => NovelSubscriptionCreateInput)
    create!: NovelSubscriptionCreateInput;

    @Field(() => NovelSubscriptionUpdateInput, {nullable:false})
    @Type(() => NovelSubscriptionUpdateInput)
    update!: NovelSubscriptionUpdateInput;
}
