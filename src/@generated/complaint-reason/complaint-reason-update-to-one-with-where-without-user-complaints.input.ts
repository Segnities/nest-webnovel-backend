import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintReasonWhereInput } from './complaint-reason-where.input';
import { Type } from 'class-transformer';
import { ComplaintReasonUpdateWithoutUserComplaintsInput } from './complaint-reason-update-without-user-complaints.input';

@InputType()
export class ComplaintReasonUpdateToOneWithWhereWithoutUserComplaintsInput {

    @Field(() => ComplaintReasonWhereInput, {nullable:true})
    @Type(() => ComplaintReasonWhereInput)
    where?: ComplaintReasonWhereInput;

    @Field(() => ComplaintReasonUpdateWithoutUserComplaintsInput, {nullable:false})
    @Type(() => ComplaintReasonUpdateWithoutUserComplaintsInput)
    data!: ComplaintReasonUpdateWithoutUserComplaintsInput;
}
