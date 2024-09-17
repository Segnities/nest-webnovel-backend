import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelUpdateWithoutNovelSubscriptionInput } from './novel-update-without-novel-subscription.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutNovelSubscriptionInput } from './novel-create-without-novel-subscription.input';
import { NovelWhereInput } from './novel-where.input';

@InputType()
export class NovelUpsertWithoutNovelSubscriptionInput {

    @Field(() => NovelUpdateWithoutNovelSubscriptionInput, {nullable:false})
    @Type(() => NovelUpdateWithoutNovelSubscriptionInput)
    update!: NovelUpdateWithoutNovelSubscriptionInput;

    @Field(() => NovelCreateWithoutNovelSubscriptionInput, {nullable:false})
    @Type(() => NovelCreateWithoutNovelSubscriptionInput)
    create!: NovelCreateWithoutNovelSubscriptionInput;

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;
}
