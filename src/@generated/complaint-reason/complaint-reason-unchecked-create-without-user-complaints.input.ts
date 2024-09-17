import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ContentComplaintUncheckedCreateNestedManyWithoutComplaintReasonInput } from '../content-complaint/content-complaint-unchecked-create-nested-many-without-complaint-reason.input';

@InputType()
export class ComplaintReasonUncheckedCreateWithoutUserComplaintsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => ContentComplaintUncheckedCreateNestedManyWithoutComplaintReasonInput, {nullable:true})
    contentComplaints?: ContentComplaintUncheckedCreateNestedManyWithoutComplaintReasonInput;
}
