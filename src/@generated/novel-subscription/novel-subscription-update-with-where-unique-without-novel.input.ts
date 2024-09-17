import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelSubscriptionWhereUniqueInput } from './novel-subscription-where-unique.input';
import { Type } from 'class-transformer';
import { NovelSubscriptionUpdateWithoutNovelInput } from './novel-subscription-update-without-novel.input';

@InputType()
export class NovelSubscriptionUpdateWithWhereUniqueWithoutNovelInput {

    @Field(() => NovelSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => NovelSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<NovelSubscriptionWhereUniqueInput, 'id'>;

    @Field(() => NovelSubscriptionUpdateWithoutNovelInput, {nullable:false})
    @Type(() => NovelSubscriptionUpdateWithoutNovelInput)
    data!: NovelSubscriptionUpdateWithoutNovelInput;
}
