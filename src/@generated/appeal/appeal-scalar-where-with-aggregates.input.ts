import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumApprovalStatusWithAggregatesFilter } from '../prisma/enum-approval-status-with-aggregates-filter.input';

@InputType()
export class AppealScalarWhereWithAggregatesInput {

    @Field(() => [AppealScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AppealScalarWhereWithAggregatesInput>;

    @Field(() => [AppealScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AppealScalarWhereWithAggregatesInput>;

    @Field(() => [AppealScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AppealScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    body?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    reviewedAt?: DateTimeWithAggregatesFilter;

    @Field(() => EnumApprovalStatusWithAggregatesFilter, {nullable:true})
    status?: EnumApprovalStatusWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    appealReasonId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    reviewedBy?: IntWithAggregatesFilter;
}
