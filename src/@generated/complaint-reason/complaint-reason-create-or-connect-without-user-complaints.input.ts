import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ComplaintReasonWhereUniqueInput } from './complaint-reason-where-unique.input';
import { Type } from 'class-transformer';
import { ComplaintReasonCreateWithoutUserComplaintsInput } from './complaint-reason-create-without-user-complaints.input';

@InputType()
export class ComplaintReasonCreateOrConnectWithoutUserComplaintsInput {

    @Field(() => ComplaintReasonWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintReasonWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintReasonWhereUniqueInput, 'id'>;

    @Field(() => ComplaintReasonCreateWithoutUserComplaintsInput, {nullable:false})
    @Type(() => ComplaintReasonCreateWithoutUserComplaintsInput)
    create!: ComplaintReasonCreateWithoutUserComplaintsInput;
}
