import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumApprovalStatusFilter } from '../prisma/enum-approval-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserComplaintScalarWhereInput {

    @Field(() => [UserComplaintScalarWhereInput], {nullable:true})
    AND?: Array<UserComplaintScalarWhereInput>;

    @Field(() => [UserComplaintScalarWhereInput], {nullable:true})
    OR?: Array<UserComplaintScalarWhereInput>;

    @Field(() => [UserComplaintScalarWhereInput], {nullable:true})
    NOT?: Array<UserComplaintScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
}
