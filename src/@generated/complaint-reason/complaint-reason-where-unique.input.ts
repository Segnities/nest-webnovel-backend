import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ComplaintReasonWhereInput } from './complaint-reason-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { UserComplaintListRelationFilter } from '../user-complaint/user-complaint-list-relation-filter.input';
import { ContentComplaintListRelationFilter } from '../content-complaint/content-complaint-list-relation-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';

@InputType()
export class ComplaintReasonWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ComplaintReasonWhereInput], {nullable:true})
    AND?: Array<ComplaintReasonWhereInput>;

    @Field(() => [ComplaintReasonWhereInput], {nullable:true})
    OR?: Array<ComplaintReasonWhereInput>;

    @Field(() => [ComplaintReasonWhereInput], {nullable:true})
    NOT?: Array<ComplaintReasonWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => UserComplaintListRelationFilter, {nullable:true})
    userComplaints?: UserComplaintListRelationFilter;

    @Field(() => ContentComplaintListRelationFilter, {nullable:true})
    contentComplaints?: ContentComplaintListRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    User?: UserNullableRelationFilter;
}
