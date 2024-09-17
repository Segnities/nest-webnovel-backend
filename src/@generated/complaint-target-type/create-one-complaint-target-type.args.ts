import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplaintTargetTypeCreateInput } from './complaint-target-type-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneComplaintTargetTypeArgs {

    @Field(() => ComplaintTargetTypeCreateInput, {nullable:false})
    @Type(() => ComplaintTargetTypeCreateInput)
    data!: ComplaintTargetTypeCreateInput;
}
