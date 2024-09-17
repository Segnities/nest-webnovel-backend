import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutNovelSubscriptionInput } from './novel-create-without-novel-subscription.input';

@InputType()
export class NovelCreateOrConnectWithoutNovelSubscriptionInput {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelCreateWithoutNovelSubscriptionInput, {nullable:false})
    @Type(() => NovelCreateWithoutNovelSubscriptionInput)
    create!: NovelCreateWithoutNovelSubscriptionInput;
}
