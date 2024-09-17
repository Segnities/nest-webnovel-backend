import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ApprovalStatus } from '../prisma/approval-status.enum';
import { Int } from '@nestjs/graphql';
import { ComplaintReason } from '../complaint-reason/complaint-reason.model';
import { ComplaintTargetType } from '../complaint-target-type/complaint-target-type.model';
import { User } from '../user/user.model';

@ObjectType()
export class ContentComplaint {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => ApprovalStatus, {nullable:false})
    status!: keyof typeof ApprovalStatus;

    @Field(() => Int, {nullable:false})
    contentId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    reasonId!: number;

    @Field(() => Int, {nullable:false})
    complaintTargetId!: number;

    @Field(() => Date, {nullable:false})
    resolvedAt!: Date;

    @Field(() => Int, {nullable:false})
    issuedBy!: number;

    @Field(() => Int, {nullable:false})
    resolvedBy!: number;

    @Field(() => ComplaintReason, {nullable:false})
    complaintReason?: ComplaintReason;

    @Field(() => ComplaintTargetType, {nullable:false})
    complaintTargetType?: ComplaintTargetType;

    @Field(() => User, {nullable:false})
    issuedByUser?: User;

    @Field(() => User, {nullable:false})
    resolvedByUser?: User;
}
