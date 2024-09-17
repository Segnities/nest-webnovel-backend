import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AppealWhereInput } from './appeal-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumApprovalStatusFilter } from '../prisma/enum-approval-status-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BanListRelationFilter } from '../ban/ban-list-relation-filter.input';
import { AppelaReasonRelationFilter } from '../appela-reason/appela-reason-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class AppealWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [AppealWhereInput], {nullable:true})
    AND?: Array<AppealWhereInput>;

    @Field(() => [AppealWhereInput], {nullable:true})
    OR?: Array<AppealWhereInput>;

    @Field(() => [AppealWhereInput], {nullable:true})
    NOT?: Array<AppealWhereInput>;

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

    @Field(() => BanListRelationFilter, {nullable:true})
    bans?: BanListRelationFilter;

    @Field(() => AppelaReasonRelationFilter, {nullable:true})
    appeal?: AppelaReasonRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    reviewedByUser?: UserRelationFilter;
}
