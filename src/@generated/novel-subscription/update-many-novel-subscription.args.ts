import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelSubscriptionUpdateManyMutationInput } from './novel-subscription-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NovelSubscriptionWhereInput } from './novel-subscription-where.input';

@ArgsType()
export class UpdateManyNovelSubscriptionArgs {

    @Field(() => NovelSubscriptionUpdateManyMutationInput, {nullable:false})
    @Type(() => NovelSubscriptionUpdateManyMutationInput)
    data!: NovelSubscriptionUpdateManyMutationInput;

    @Field(() => NovelSubscriptionWhereInput, {nullable:true})
    @Type(() => NovelSubscriptionWhereInput)
    where?: NovelSubscriptionWhereInput;
}
