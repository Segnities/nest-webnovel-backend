import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ApprovalStatus } from '../prisma/approval-status.enum';

@ObjectType()
export class UserComplaintMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => ApprovalStatus, {nullable:true})
    status?: keyof typeof ApprovalStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Int, {nullable:true})
    reasonId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    complaintTargetId?: number;
}
