import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintReasonUpdateWithoutContentComplaintsInput } from './complaint-reason-update-without-content-complaints.input';
import { Type } from 'class-transformer';
import { ComplaintReasonCreateWithoutContentComplaintsInput } from './complaint-reason-create-without-content-complaints.input';
import { ComplaintReasonWhereInput } from './complaint-reason-where.input';

@InputType()
export class ComplaintReasonUpsertWithoutContentComplaintsInput {

    @Field(() => ComplaintReasonUpdateWithoutContentComplaintsInput, {nullable:false})
    @Type(() => ComplaintReasonUpdateWithoutContentComplaintsInput)
    update!: ComplaintReasonUpdateWithoutContentComplaintsInput;

    @Field(() => ComplaintReasonCreateWithoutContentComplaintsInput, {nullable:false})
    @Type(() => ComplaintReasonCreateWithoutContentComplaintsInput)
    create!: ComplaintReasonCreateWithoutContentComplaintsInput;

    @Field(() => ComplaintReasonWhereInput, {nullable:true})
    @Type(() => ComplaintReasonWhereInput)
    where?: ComplaintReasonWhereInput;
}
