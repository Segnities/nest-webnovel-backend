import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ComplaintReasonWhereUniqueInput } from './complaint-reason-where-unique.input';
import { Type } from 'class-transformer';
import { ComplaintReasonCreateWithoutContentComplaintsInput } from './complaint-reason-create-without-content-complaints.input';

@InputType()
export class ComplaintReasonCreateOrConnectWithoutContentComplaintsInput {

    @Field(() => ComplaintReasonWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintReasonWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintReasonWhereUniqueInput, 'id'>;

    @Field(() => ComplaintReasonCreateWithoutContentComplaintsInput, {nullable:false})
    @Type(() => ComplaintReasonCreateWithoutContentComplaintsInput)
    create!: ComplaintReasonCreateWithoutContentComplaintsInput;
}
