import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelSubscriptionCreateManyUserInput } from './novel-subscription-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class NovelSubscriptionCreateManyUserInputEnvelope {

    @Field(() => [NovelSubscriptionCreateManyUserInput], {nullable:false})
    @Type(() => NovelSubscriptionCreateManyUserInput)
    data!: Array<NovelSubscriptionCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
