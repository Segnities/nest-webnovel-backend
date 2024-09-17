import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserComplaintWhereInput } from './user-complaint-where.input';
import { EnumApprovalStatusFilter } from '../prisma/enum-approval-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { ComplaintReasonRelationFilter } from '../complaint-reason/complaint-reason-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ComplaintTargetTypeRelationFilter } from '../complaint-target-type/complaint-target-type-relation-filter.input';

@InputType()
export class UserComplaintWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [UserComplaintWhereInput], {nullable:true})
    AND?: Array<UserComplaintWhereInput>;

    @Field(() => [UserComplaintWhereInput], {nullable:true})
    OR?: Array<UserComplaintWhereInput>;

    @Field(() => [UserComplaintWhereInput], {nullable:true})
    NOT?: Array<UserComplaintWhereInput>;

    @Field(() => EnumApprovalStatusFilter, {nullable:true})
    status?: EnumApprovalStatusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    reasonId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    complaintTargetId?: IntFilter;

    @Field(() => ComplaintReasonRelationFilter, {nullable:true})
    reason?: ComplaintReasonRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => ComplaintTargetTypeRelationFilter, {nullable:true})
    complaintTargetType?: ComplaintTargetTypeRelationFilter;
}
