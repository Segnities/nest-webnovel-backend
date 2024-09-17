import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumApprovalStatusFilter } from '../prisma/enum-approval-status-filter.input';

@InputType()
export class AppealScalarWhereInput {

    @Field(() => [AppealScalarWhereInput], {nullable:true})
    AND?: Array<AppealScalarWhereInput>;

    @Field(() => [AppealScalarWhereInput], {nullable:true})
    OR?: Array<AppealScalarWhereInput>;

    @Field(() => [AppealScalarWhereInput], {nullable:true})
    NOT?: Array<AppealScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    body?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    reviewedAt?: DateTimeFilter;

    @Field(() => EnumApprovalStatusFilter, {nullable:true})
    status?: EnumApprovalStatusFilter;

    @Field(() => IntFilter, {nullable:true})
    appealReasonId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    reviewedBy?: IntFilter;
}
