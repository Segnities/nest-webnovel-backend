import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplaintReasonUpdateManyMutationInput } from './complaint-reason-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ComplaintReasonWhereInput } from './complaint-reason-where.input';

@ArgsType()
export class UpdateManyComplaintReasonArgs {

    @Field(() => ComplaintReasonUpdateManyMutationInput, {nullable:false})
    @Type(() => ComplaintReasonUpdateManyMutationInput)
    data!: ComplaintReasonUpdateManyMutationInput;

    @Field(() => ComplaintReasonWhereInput, {nullable:true})
    @Type(() => ComplaintReasonWhereInput)
    where?: ComplaintReasonWhereInput;
}
