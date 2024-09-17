import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutNovelsSubscriptionInput } from '../user/user-create-nested-one-without-novels-subscription.input';
import { NovelCreateNestedOneWithoutNovelSubscriptionInput } from '../novel/novel-create-nested-one-without-novel-subscription.input';

@InputType()
export class NovelSubscriptionCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutNovelsSubscriptionInput, {nullable:false})
    user!: UserCreateNestedOneWithoutNovelsSubscriptionInput;

    @Field(() => NovelCreateNestedOneWithoutNovelSubscriptionInput, {nullable:false})
    novel!: NovelCreateNestedOneWithoutNovelSubscriptionInput;
}
