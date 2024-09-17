import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplaintTargetTypeUpdateManyMutationInput } from './complaint-target-type-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';

@ArgsType()
export class UpdateManyComplaintTargetTypeArgs {

    @Field(() => ComplaintTargetTypeUpdateManyMutationInput, {nullable:false})
    @Type(() => ComplaintTargetTypeUpdateManyMutationInput)
    data!: ComplaintTargetTypeUpdateManyMutationInput;

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereInput)
    where?: ComplaintTargetTypeWhereInput;
}
