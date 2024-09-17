import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class BanScalarWhereInput {

    @Field(() => [BanScalarWhereInput], {nullable:true})
    AND?: Array<BanScalarWhereInput>;

    @Field(() => [BanScalarWhereInput], {nullable:true})
    OR?: Array<BanScalarWhereInput>;

    @Field(() => [BanScalarWhereInput], {nullable:true})
    NOT?: Array<BanScalarWhereInput>;

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
}
