import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelSubscriptionUpdateInput } from './novel-subscription-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { NovelSubscriptionWhereUniqueInput } from './novel-subscription-where-unique.input';

@ArgsType()
export class UpdateOneNovelSubscriptionArgs {

    @Field(() => NovelSubscriptionUpdateInput, {nullable:false})
    @Type(() => NovelSubscriptionUpdateInput)
    data!: NovelSubscriptionUpdateInput;

    @Field(() => NovelSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => NovelSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<NovelSubscriptionWhereUniqueInput, 'id'>;
}
