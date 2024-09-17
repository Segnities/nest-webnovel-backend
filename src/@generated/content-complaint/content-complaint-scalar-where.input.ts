import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumApprovalStatusFilter } from '../prisma/enum-approval-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ContentComplaintScalarWhereInput {

    @Field(() => [ContentComplaintScalarWhereInput], {nullable:true})
    AND?: Array<ContentComplaintScalarWhereInput>;

    @Field(() => [ContentComplaintScalarWhereInput], {nullable:true})
    OR?: Array<ContentComplaintScalarWhereInput>;

    @Field(() => [ContentComplaintScalarWhereInput], {nullable:true})
    NOT?: Array<ContentComplaintScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
}
