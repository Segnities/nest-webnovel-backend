import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelSubscriptionWhereUniqueInput } from './novel-subscription-where-unique.input';
import { Type } from 'class-transformer';
import { NovelSubscriptionUpdateWithoutUserInput } from './novel-subscription-update-without-user.input';

@InputType()
export class NovelSubscriptionUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => NovelSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => NovelSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<NovelSubscriptionWhereUniqueInput, 'id'>;

    @Field(() => NovelSubscriptionUpdateWithoutUserInput, {nullable:false})
    @Type(() => NovelSubscriptionUpdateWithoutUserInput)
    data!: NovelSubscriptionUpdateWithoutUserInput;
}
