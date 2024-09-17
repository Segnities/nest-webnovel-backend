import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BanReasonSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
