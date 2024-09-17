import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintReasonWhereInput } from './complaint-reason-where.input';
import { Type } from 'class-transformer';
import { ComplaintReasonUpdateWithoutContentComplaintsInput } from './complaint-reason-update-without-content-complaints.input';

@InputType()
export class ComplaintReasonUpdateToOneWithWhereWithoutContentComplaintsInput {

    @Field(() => ComplaintReasonWhereInput, {nullable:true})
    @Type(() => ComplaintReasonWhereInput)
    where?: ComplaintReasonWhereInput;

    @Field(() => ComplaintReasonUpdateWithoutContentComplaintsInput, {nullable:false})
    @Type(() => ComplaintReasonUpdateWithoutContentComplaintsInput)
    data!: ComplaintReasonUpdateWithoutContentComplaintsInput;
}
