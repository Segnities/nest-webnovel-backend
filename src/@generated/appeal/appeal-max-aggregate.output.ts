import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ApprovalStatus } from '../prisma/approval-status.enum';

@ObjectType()
export class AppealMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    body?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    reviewedAt?: Date | string;

    @Field(() => ApprovalStatus, {nullable:true})
    status?: keyof typeof ApprovalStatus;

    @Field(() => Int, {nullable:true})
    appealReasonId?: number;

    @Field(() => Int, {nullable:true})
    reviewedBy?: number;
}
