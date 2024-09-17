import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelSubscriptionScalarWhereInput } from './novel-subscription-scalar-where.input';
import { Type } from 'class-transformer';
import { NovelSubscriptionUpdateManyMutationInput } from './novel-subscription-update-many-mutation.input';

@InputType()
export class NovelSubscriptionUpdateManyWithWhereWithoutUserInput {

    @Field(() => NovelSubscriptionScalarWhereInput, {nullable:false})
    @Type(() => NovelSubscriptionScalarWhereInput)
    where!: NovelSubscriptionScalarWhereInput;

    @Field(() => NovelSubscriptionUpdateManyMutationInput, {nullable:false})
    @Type(() => NovelSubscriptionUpdateManyMutationInput)
    data!: NovelSubscriptionUpdateManyMutationInput;
}
