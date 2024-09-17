import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutNovelSubscriptionInput } from './novel-create-without-novel-subscription.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutNovelSubscriptionInput } from './novel-create-or-connect-without-novel-subscription.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';

@InputType()
export class NovelCreateNestedOneWithoutNovelSubscriptionInput {

    @Field(() => NovelCreateWithoutNovelSubscriptionInput, {nullable:true})
    @Type(() => NovelCreateWithoutNovelSubscriptionInput)
    create?: NovelCreateWithoutNovelSubscriptionInput;

    @Field(() => NovelCreateOrConnectWithoutNovelSubscriptionInput, {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutNovelSubscriptionInput)
    connectOrCreate?: NovelCreateOrConnectWithoutNovelSubscriptionInput;

    @Field(() => NovelWhereUniqueInput, {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;
}
