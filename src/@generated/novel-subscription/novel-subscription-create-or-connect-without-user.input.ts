import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelSubscriptionWhereUniqueInput } from './novel-subscription-where-unique.input';
import { Type } from 'class-transformer';
import { NovelSubscriptionCreateWithoutUserInput } from './novel-subscription-create-without-user.input';

@InputType()
export class NovelSubscriptionCreateOrConnectWithoutUserInput {

    @Field(() => NovelSubscriptionWhereUniqueInput, {nullable:false})
    @Type(() => NovelSubscriptionWhereUniqueInput)
    where!: Prisma.AtLeast<NovelSubscriptionWhereUniqueInput, 'id'>;

    @Field(() => NovelSubscriptionCreateWithoutUserInput, {nullable:false})
    @Type(() => NovelSubscriptionCreateWithoutUserInput)
    create!: NovelSubscriptionCreateWithoutUserInput;
}
