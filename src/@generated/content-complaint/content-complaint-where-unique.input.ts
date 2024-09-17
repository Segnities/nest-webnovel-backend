import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ContentComplaintWhereInput } from './content-complaint-where.input';
import { EnumApprovalStatusFilter } from '../prisma/enum-approval-status-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ComplaintReasonRelationFilter } from '../complaint-reason/complaint-reason-relation-filter.input';
import { ComplaintTargetTypeRelationFilter } from '../complaint-target-type/complaint-target-type-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class ContentComplaintWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ContentComplaintWhereInput], {nullable:true})
    AND?: Array<ContentComplaintWhereInput>;

    @Field(() => [ContentComplaintWhereInput], {nullable:true})
    OR?: Array<ContentComplaintWhereInput>;

    @Field(() => [ContentComplaintWhereInput], {nullable:true})
    NOT?: Array<ContentComplaintWhereInput>;

    @Field(() => EnumApprovalStatusFilter, {nullable:true})
    status?: EnumApprovalStatusFilter;

    @Field(() => IntFilter, {nullable:true})
    contentId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    reasonId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    complaintTargetId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    resolvedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    issuedBy?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    resolvedBy?: IntFilter;

    @Field(() => ComplaintReasonRelationFilter, {nullable:true})
    complaintReason?: ComplaintReasonRelationFilter;

    @Field(() => ComplaintTargetTypeRelationFilter, {nullable:true})
    complaintTargetType?: ComplaintTargetTypeRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    issuedByUser?: UserRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    resolvedByUser?: UserRelationFilter;
}
