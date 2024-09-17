import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumApprovalStatusWithAggregatesFilter } from '../prisma/enum-approval-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ContentComplaintScalarWhereWithAggregatesInput {

    @Field(() => [ContentComplaintScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ContentComplaintScalarWhereWithAggregatesInput>;

    @Field(() => [ContentComplaintScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ContentComplaintScalarWhereWithAggregatesInput>;

    @Field(() => [ContentComplaintScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ContentComplaintScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => EnumApprovalStatusWithAggregatesFilter, {nullable:true})
    status?: EnumApprovalStatusWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    contentId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    reasonId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    complaintTargetId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    resolvedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    issuedBy?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    resolvedBy?: IntWithAggregatesFilter;
}
