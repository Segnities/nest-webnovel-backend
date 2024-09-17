import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ApprovalStatus } from '../prisma/approval-status.enum';
import { AppealCountAggregate } from './appeal-count-aggregate.output';
import { AppealAvgAggregate } from './appeal-avg-aggregate.output';
import { AppealSumAggregate } from './appeal-sum-aggregate.output';
import { AppealMinAggregate } from './appeal-min-aggregate.output';
import { AppealMaxAggregate } from './appeal-max-aggregate.output';

@ObjectType()
export class AppealGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    reviewedAt!: Date | string;

    @Field(() => ApprovalStatus, {nullable:false})
    status!: keyof typeof ApprovalStatus;

    @Field(() => Int, {nullable:false})
    appealReasonId!: number;

    @Field(() => Int, {nullable:false})
    reviewedBy!: number;

    @Field(() => AppealCountAggregate, {nullable:true})
    _count?: AppealCountAggregate;

    @Field(() => AppealAvgAggregate, {nullable:true})
    _avg?: AppealAvgAggregate;

    @Field(() => AppealSumAggregate, {nullable:true})
    _sum?: AppealSumAggregate;

    @Field(() => AppealMinAggregate, {nullable:true})
    _min?: AppealMinAggregate;

    @Field(() => AppealMaxAggregate, {nullable:true})
    _max?: AppealMaxAggregate;
}
