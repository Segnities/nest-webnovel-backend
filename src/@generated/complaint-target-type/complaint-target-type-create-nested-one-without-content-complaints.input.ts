import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeCreateWithoutContentComplaintsInput } from './complaint-target-type-create-without-content-complaints.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateOrConnectWithoutContentComplaintsInput } from './complaint-target-type-create-or-connect-without-content-complaints.input';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';

@InputType()
export class ComplaintTargetTypeCreateNestedOneWithoutContentComplaintsInput {

    @Field(() => ComplaintTargetTypeCreateWithoutContentComplaintsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateWithoutContentComplaintsInput)
    create?: ComplaintTargetTypeCreateWithoutContentComplaintsInput;

    @Field(() => ComplaintTargetTypeCreateOrConnectWithoutContentComplaintsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateOrConnectWithoutContentComplaintsInput)
    connectOrCreate?: ComplaintTargetTypeCreateOrConnectWithoutContentComplaintsInput;

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;
}
