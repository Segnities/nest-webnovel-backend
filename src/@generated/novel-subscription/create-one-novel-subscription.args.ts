import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelSubscriptionCreateInput } from './novel-subscription-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNovelSubscriptionArgs {

    @Field(() => NovelSubscriptionCreateInput, {nullable:false})
    @Type(() => NovelSubscriptionCreateInput)
    data!: NovelSubscriptionCreateInput;
}
