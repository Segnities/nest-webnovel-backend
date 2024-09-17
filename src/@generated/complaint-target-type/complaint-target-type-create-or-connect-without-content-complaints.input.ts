import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateWithoutContentComplaintsInput } from './complaint-target-type-create-without-content-complaints.input';

@InputType()
export class ComplaintTargetTypeCreateOrConnectWithoutContentComplaintsInput {

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;

    @Field(() => ComplaintTargetTypeCreateWithoutContentComplaintsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeCreateWithoutContentComplaintsInput)
    create!: ComplaintTargetTypeCreateWithoutContentComplaintsInput;
}
