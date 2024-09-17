import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplaintReasonCreateInput } from './complaint-reason-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneComplaintReasonArgs {

    @Field(() => ComplaintReasonCreateInput, {nullable:false})
    @Type(() => ComplaintReasonCreateInput)
    data!: ComplaintReasonCreateInput;
}
