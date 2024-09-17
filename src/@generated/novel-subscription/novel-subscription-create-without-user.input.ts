import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateNestedOneWithoutNovelSubscriptionInput } from '../novel/novel-create-nested-one-without-novel-subscription.input';

@InputType()
export class NovelSubscriptionCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => NovelCreateNestedOneWithoutNovelSubscriptionInput, {nullable:false})
    novel!: NovelCreateNestedOneWithoutNovelSubscriptionInput;
}
