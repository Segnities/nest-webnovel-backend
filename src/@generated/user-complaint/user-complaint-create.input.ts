import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ApprovalStatus } from '../prisma/approval-status.enum';
import { ComplaintReasonCreateNestedOneWithoutUserComplaintsInput } from '../complaint-reason/complaint-reason-create-nested-one-without-user-complaints.input';
import { UserCreateNestedOneWithoutUserComplaintsInput } from '../user/user-create-nested-one-without-user-complaints.input';
import { ComplaintTargetTypeCreateNestedOneWithoutUsersComplaintsInput } from '../complaint-target-type/complaint-target-type-create-nested-one-without-users-complaints.input';

@InputType()
export class UserComplaintCreateInput {

    @Field(() => ApprovalStatus, {nullable:false})
    status!: keyof typeof ApprovalStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ComplaintReasonCreateNestedOneWithoutUserComplaintsInput, {nullable:false})
    reason!: ComplaintReasonCreateNestedOneWithoutUserComplaintsInput;

    @Field(() => UserCreateNestedOneWithoutUserComplaintsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserComplaintsInput;

    @Field(() => ComplaintTargetTypeCreateNestedOneWithoutUsersComplaintsInput, {nullable:false})
    complaintTargetType!: ComplaintTargetTypeCreateNestedOneWithoutUsersComplaintsInput;
}
