import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ApprovalStatus } from '../prisma/approval-status.enum';

@InputType()
export class ContentComplaintUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => ApprovalStatus, {nullable:false})
    status!: keyof typeof ApprovalStatus;

    @Field(() => Int, {nullable:false})
    contentId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    reasonId!: number;

    @Field(() => Int, {nullable:false})
    complaintTargetId!: number;

    @Field(() => Date, {nullable:false})
    resolvedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    issuedBy!: number;

    @Field(() => Int, {nullable:false})
    resolvedBy!: number;
}
