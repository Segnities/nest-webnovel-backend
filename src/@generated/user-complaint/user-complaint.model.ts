import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ApprovalStatus } from '../prisma/approval-status.enum';
import { Int } from '@nestjs/graphql';
import { ComplaintReason } from '../complaint-reason/complaint-reason.model';
import { User } from '../user/user.model';
import { ComplaintTargetType } from '../complaint-target-type/complaint-target-type.model';

@ObjectType()
export class UserComplaint {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => ApprovalStatus, {nullable:false})
    status!: keyof typeof ApprovalStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Int, {nullable:false})
    reasonId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    complaintTargetId!: number;

    @Field(() => ComplaintReason, {nullable:false})
    reason?: ComplaintReason;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => ComplaintTargetType, {nullable:false})
    complaintTargetType?: ComplaintTargetType;
}
