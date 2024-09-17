import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelSubscriptionCreateManyInput } from './novel-subscription-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNovelSubscriptionArgs {

    @Field(() => [NovelSubscriptionCreateManyInput], {nullable:false})
    @Type(() => NovelSubscriptionCreateManyInput)
    data!: Array<NovelSubscriptionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
