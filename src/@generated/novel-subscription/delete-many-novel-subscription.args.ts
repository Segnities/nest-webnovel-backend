import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelSubscriptionWhereInput } from './novel-subscription-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyNovelSubscriptionArgs {

    @Field(() => NovelSubscriptionWhereInput, {nullable:true})
    @Type(() => NovelSubscriptionWhereInput)
    where?: NovelSubscriptionWhereInput;
}
