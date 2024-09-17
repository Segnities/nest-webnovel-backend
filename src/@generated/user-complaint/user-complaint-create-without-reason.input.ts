import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ApprovalStatus } from '../prisma/approval-status.enum';
import { UserCreateNestedOneWithoutUserComplaintsInput } from '../user/user-create-nested-one-without-user-complaints.input';
import { ComplaintTargetTypeCreateNestedOneWithoutUsersComplaintsInput } from '../complaint-target-type/complaint-target-type-create-nested-one-without-users-complaints.input';

@InputType()
export class UserComplaintCreateWithoutReasonInput {

    @Field(() => ApprovalStatus, {nullable:false})
    status!: keyof typeof ApprovalStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutUserComplaintsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserComplaintsInput;

    @Field(() => ComplaintTargetTypeCreateNestedOneWithoutUsersComplaintsInput, {nullable:false})
    complaintTargetType!: ComplaintTargetTypeCreateNestedOneWithoutUsersComplaintsInput;
}
