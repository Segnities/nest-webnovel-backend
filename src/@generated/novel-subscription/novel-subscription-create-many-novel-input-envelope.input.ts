import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelSubscriptionCreateManyNovelInput } from './novel-subscription-create-many-novel.input';
import { Type } from 'class-transformer';

@InputType()
export class NovelSubscriptionCreateManyNovelInputEnvelope {

    @Field(() => [NovelSubscriptionCreateManyNovelInput], {nullable:false})
    @Type(() => NovelSubscriptionCreateManyNovelInput)
    data!: Array<NovelSubscriptionCreateManyNovelInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
