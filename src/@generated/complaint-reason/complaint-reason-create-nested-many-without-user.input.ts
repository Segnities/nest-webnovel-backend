import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintReasonCreateWithoutUserInput } from './complaint-reason-create-without-user.input';
import { Type } from 'class-transformer';
import { ComplaintReasonCreateOrConnectWithoutUserInput } from './complaint-reason-create-or-connect-without-user.input';
import { ComplaintReasonCreateManyUserInputEnvelope } from './complaint-reason-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ComplaintReasonWhereUniqueInput } from './complaint-reason-where-unique.input';

@InputType()
export class ComplaintReasonCreateNestedManyWithoutUserInput {

    @Field(() => [ComplaintReasonCreateWithoutUserInput], {nullable:true})
    @Type(() => ComplaintReasonCreateWithoutUserInput)
    create?: Array<ComplaintReasonCreateWithoutUserInput>;

    @Field(() => [ComplaintReasonCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ComplaintReasonCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ComplaintReasonCreateOrConnectWithoutUserInput>;

    @Field(() => ComplaintReasonCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ComplaintReasonCreateManyUserInputEnvelope)
    createMany?: ComplaintReasonCreateManyUserInputEnvelope;

    @Field(() => [ComplaintReasonWhereUniqueInput], {nullable:true})
    @Type(() => ComplaintReasonWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ComplaintReasonWhereUniqueInput, 'id'>>;
}
