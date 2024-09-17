import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutNovelsSubscriptionInput } from '../user/user-create-nested-one-without-novels-subscription.input';

@InputType()
export class NovelSubscriptionCreateWithoutNovelInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutNovelsSubscriptionInput, {nullable:false})
    user!: UserCreateNestedOneWithoutNovelsSubscriptionInput;
}
