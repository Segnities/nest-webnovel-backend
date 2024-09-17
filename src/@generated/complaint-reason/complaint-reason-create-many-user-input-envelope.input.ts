import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintReasonCreateManyUserInput } from './complaint-reason-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ComplaintReasonCreateManyUserInputEnvelope {

    @Field(() => [ComplaintReasonCreateManyUserInput], {nullable:false})
    @Type(() => ComplaintReasonCreateManyUserInput)
    data!: Array<ComplaintReasonCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
