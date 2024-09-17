import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ApprovalStatus } from '../prisma/approval-status.enum';
import { UserComplaintCountAggregate } from './user-complaint-count-aggregate.output';
import { UserComplaintAvgAggregate } from './user-complaint-avg-aggregate.output';
import { UserComplaintSumAggregate } from './user-complaint-sum-aggregate.output';
import { UserComplaintMinAggregate } from './user-complaint-min-aggregate.output';
import { UserComplaintMaxAggregate } from './user-complaint-max-aggregate.output';

@ObjectType()
export class UserComplaintGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => ApprovalStatus, {nullable:false})
    status!: keyof typeof ApprovalStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Int, {nullable:false})
    reasonId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    complaintTargetId!: number;

    @Field(() => UserComplaintCountAggregate, {nullable:true})
    _count?: UserComplaintCountAggregate;

    @Field(() => UserComplaintAvgAggregate, {nullable:true})
    _avg?: UserComplaintAvgAggregate;

    @Field(() => UserComplaintSumAggregate, {nullable:true})
    _sum?: UserComplaintSumAggregate;

    @Field(() => UserComplaintMinAggregate, {nullable:true})
    _min?: UserComplaintMinAggregate;

    @Field(() => UserComplaintMaxAggregate, {nullable:true})
    _max?: UserComplaintMaxAggregate;
}
