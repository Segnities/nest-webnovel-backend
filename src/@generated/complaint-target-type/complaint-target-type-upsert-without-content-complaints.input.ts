import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeUpdateWithoutContentComplaintsInput } from './complaint-target-type-update-without-content-complaints.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateWithoutContentComplaintsInput } from './complaint-target-type-create-without-content-complaints.input';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';

@InputType()
export class ComplaintTargetTypeUpsertWithoutContentComplaintsInput {

    @Field(() => ComplaintTargetTypeUpdateWithoutContentComplaintsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeUpdateWithoutContentComplaintsInput)
    update!: ComplaintTargetTypeUpdateWithoutContentComplaintsInput;

    @Field(() => ComplaintTargetTypeCreateWithoutContentComplaintsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeCreateWithoutContentComplaintsInput)
    create!: ComplaintTargetTypeCreateWithoutContentComplaintsInput;

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereInput)
    where?: ComplaintTargetTypeWhereInput;
}
