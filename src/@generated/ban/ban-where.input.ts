import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { AppealRelationFilter } from '../appeal/appeal-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ComplaintTargetTypeRelationFilter } from '../complaint-target-type/complaint-target-type-relation-filter.input';

@InputType()
export class BanWhereInput {

    @Field(() => [BanWhereInput], {nullable:true})
    AND?: Array<BanWhereInput>;

    @Field(() => [BanWhereInput], {nullable:true})
    OR?: Array<BanWhereInput>;

    @Field(() => [BanWhereInput], {nullable:true})
    NOT?: Array<BanWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    banStart?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    banEnd?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    duration?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    appealed?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    appealId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    issuedBy?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    complaintTargetId?: IntFilter;

    @Field(() => AppealRelationFilter, {nullable:true})
    appeal?: AppealRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    issuedByUser?: UserRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => ComplaintTargetTypeRelationFilter, {nullable:true})
    complaintTargetType?: ComplaintTargetTypeRelationFilter;
}
