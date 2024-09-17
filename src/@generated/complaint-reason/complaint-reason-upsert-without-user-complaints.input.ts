import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintReasonUpdateWithoutUserComplaintsInput } from './complaint-reason-update-without-user-complaints.input';
import { Type } from 'class-transformer';
import { ComplaintReasonCreateWithoutUserComplaintsInput } from './complaint-reason-create-without-user-complaints.input';
import { ComplaintReasonWhereInput } from './complaint-reason-where.input';

@InputType()
export class ComplaintReasonUpsertWithoutUserComplaintsInput {

    @Field(() => ComplaintReasonUpdateWithoutUserComplaintsInput, {nullable:false})
    @Type(() => ComplaintReasonUpdateWithoutUserComplaintsInput)
    update!: ComplaintReasonUpdateWithoutUserComplaintsInput;

    @Field(() => ComplaintReasonCreateWithoutUserComplaintsInput, {nullable:false})
    @Type(() => ComplaintReasonCreateWithoutUserComplaintsInput)
    create!: ComplaintReasonCreateWithoutUserComplaintsInput;

    @Field(() => ComplaintReasonWhereInput, {nullable:true})
    @Type(() => ComplaintReasonWhereInput)
    where?: ComplaintReasonWhereInput;
}
