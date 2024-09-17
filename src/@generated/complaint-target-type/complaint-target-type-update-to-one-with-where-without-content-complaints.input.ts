import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeUpdateWithoutContentComplaintsInput } from './complaint-target-type-update-without-content-complaints.input';

@InputType()
export class ComplaintTargetTypeUpdateToOneWithWhereWithoutContentComplaintsInput {

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereInput)
    where?: ComplaintTargetTypeWhereInput;

    @Field(() => ComplaintTargetTypeUpdateWithoutContentComplaintsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeUpdateWithoutContentComplaintsInput)
    data!: ComplaintTargetTypeUpdateWithoutContentComplaintsInput;
}
