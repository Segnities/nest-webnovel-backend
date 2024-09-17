import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ApprovalStatus } from '../prisma/approval-status.enum';
import { Int } from '@nestjs/graphql';
import { Ban } from '../ban/ban.model';
import { AppelaReason } from '../appela-reason/appela-reason.model';
import { User } from '../user/user.model';
import { AppealCount } from './appeal-count.output';

@ObjectType()
export class Appeal {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:false})
    reviewedAt!: Date;

    @Field(() => ApprovalStatus, {nullable:false})
    status!: keyof typeof ApprovalStatus;

    @Field(() => Int, {nullable:false})
    appealReasonId!: number;

    @Field(() => Int, {nullable:false})
    reviewedBy!: number;

    @Field(() => [Ban], {nullable:true})
    bans?: Array<Ban>;

    @Field(() => AppelaReason, {nullable:false})
    appeal?: AppelaReason;

    @Field(() => User, {nullable:false})
    reviewedByUser?: User;

    @Field(() => AppealCount, {nullable:false})
    _count?: AppealCount;
}
