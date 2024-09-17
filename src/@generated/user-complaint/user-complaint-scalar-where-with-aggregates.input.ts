import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumApprovalStatusWithAggregatesFilter } from '../prisma/enum-approval-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UserComplaintScalarWhereWithAggregatesInput {

    @Field(() => [UserComplaintScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserComplaintScalarWhereWithAggregatesInput>;

    @Field(() => [UserComplaintScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserComplaintScalarWhereWithAggregatesInput>;

    @Field(() => [UserComplaintScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserComplaintScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => EnumApprovalStatusWithAggregatesFilter, {nullable:true})
    status?: EnumApprovalStatusWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    reasonId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    complaintTargetId?: IntWithAggregatesFilter;
}
