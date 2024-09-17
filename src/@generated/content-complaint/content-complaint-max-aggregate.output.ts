import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ApprovalStatus } from '../prisma/approval-status.enum';

@ObjectType()
export class ContentComplaintMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => ApprovalStatus, {nullable:true})
    status?: keyof typeof ApprovalStatus;

    @Field(() => Int, {nullable:true})
    contentId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    reasonId?: number;

    @Field(() => Int, {nullable:true})
    complaintTargetId?: number;

    @Field(() => Date, {nullable:true})
    resolvedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    issuedBy?: number;

    @Field(() => Int, {nullable:true})
    resolvedBy?: number;
}
