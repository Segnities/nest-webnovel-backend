import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentComplaintCreateNestedManyWithoutComplaintReasonInput } from '../content-complaint/content-complaint-create-nested-many-without-complaint-reason.input';
import { UserCreateNestedOneWithoutComplaintReasonsInput } from '../user/user-create-nested-one-without-complaint-reasons.input';

@InputType()
export class ComplaintReasonCreateWithoutUserComplaintsInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ContentComplaintCreateNestedManyWithoutComplaintReasonInput, {nullable:true})
    contentComplaints?: ContentComplaintCreateNestedManyWithoutComplaintReasonInput;

    @Field(() => UserCreateNestedOneWithoutComplaintReasonsInput, {nullable:true})
    User?: UserCreateNestedOneWithoutComplaintReasonsInput;
}
