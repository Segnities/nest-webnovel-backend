import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelWhereInput } from './novel-where.input';
import { Type } from 'class-transformer';
import { NovelUpdateWithoutNovelSubscriptionInput } from './novel-update-without-novel-subscription.input';

@InputType()
export class NovelUpdateToOneWithWhereWithoutNovelSubscriptionInput {

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;

    @Field(() => NovelUpdateWithoutNovelSubscriptionInput, {nullable:false})
    @Type(() => NovelUpdateWithoutNovelSubscriptionInput)
    data!: NovelUpdateWithoutNovelSubscriptionInput;
}
