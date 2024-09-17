import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ApprovalStatus } from '../prisma/approval-status.enum';
import { ComplaintReasonCreateNestedOneWithoutUserComplaintsInput } from '../complaint-reason/complaint-reason-create-nested-one-without-user-complaints.input';
import { ComplaintTargetTypeCreateNestedOneWithoutUsersComplaintsInput } from '../complaint-target-type/complaint-target-type-create-nested-one-without-users-complaints.input';

@InputType()
export class UserComplaintCreateWithoutUserInput {

    @Field(() => ApprovalStatus, {nullable:false})
    status!: keyof typeof ApprovalStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ComplaintReasonCreateNestedOneWithoutUserComplaintsInput, {nullable:false})
    reason!: ComplaintReasonCreateNestedOneWithoutUserComplaintsInput;

    @Field(() => ComplaintTargetTypeCreateNestedOneWithoutUsersComplaintsInput, {nullable:false})
    complaintTargetType!: ComplaintTargetTypeCreateNestedOneWithoutUsersComplaintsInput;
}
