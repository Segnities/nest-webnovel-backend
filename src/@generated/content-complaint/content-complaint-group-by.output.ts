import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ApprovalStatus } from '../prisma/approval-status.enum';
import { ContentComplaintCountAggregate } from './content-complaint-count-aggregate.output';
import { ContentComplaintAvgAggregate } from './content-complaint-avg-aggregate.output';
import { ContentComplaintSumAggregate } from './content-complaint-sum-aggregate.output';
import { ContentComplaintMinAggregate } from './content-complaint-min-aggregate.output';
import { ContentComplaintMaxAggregate } from './content-complaint-max-aggregate.output';

@ObjectType()
export class ContentComplaintGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => ApprovalStatus, {nullable:false})
    status!: keyof typeof ApprovalStatus;

    @Field(() => Int, {nullable:false})
    contentId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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

    @Field(() => ContentComplaintCountAggregate, {nullable:true})
    _count?: ContentComplaintCountAggregate;

    @Field(() => ContentComplaintAvgAggregate, {nullable:true})
    _avg?: ContentComplaintAvgAggregate;

    @Field(() => ContentComplaintSumAggregate, {nullable:true})
    _sum?: ContentComplaintSumAggregate;

    @Field(() => ContentComplaintMinAggregate, {nullable:true})
    _min?: ContentComplaintMinAggregate;

    @Field(() => ContentComplaintMaxAggregate, {nullable:true})
    _max?: ContentComplaintMaxAggregate;
}
