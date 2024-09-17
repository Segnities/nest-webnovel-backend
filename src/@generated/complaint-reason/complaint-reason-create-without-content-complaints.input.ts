import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserComplaintCreateNestedManyWithoutReasonInput } from '../user-complaint/user-complaint-create-nested-many-without-reason.input';
import { UserCreateNestedOneWithoutComplaintReasonsInput } from '../user/user-create-nested-one-without-complaint-reasons.input';

@InputType()
export class ComplaintReasonCreateWithoutContentComplaintsInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserComplaintCreateNestedManyWithoutReasonInput, {nullable:true})
    userComplaints?: UserComplaintCreateNestedManyWithoutReasonInput;

    @Field(() => UserCreateNestedOneWithoutComplaintReasonsInput, {nullable:true})
    User?: UserCreateNestedOneWithoutComplaintReasonsInput;
}
