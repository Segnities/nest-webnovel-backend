import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelSubscriptionWhereInput } from './novel-subscription-where.input';

@InputType()
export class NovelSubscriptionListRelationFilter {

    @Field(() => NovelSubscriptionWhereInput, {nullable:true})
    every?: NovelSubscriptionWhereInput;

    @Field(() => NovelSubscriptionWhereInput, {nullable:true})
    some?: NovelSubscriptionWhereInput;

    @Field(() => NovelSubscriptionWhereInput, {nullable:true})
    none?: NovelSubscriptionWhereInput;
}
