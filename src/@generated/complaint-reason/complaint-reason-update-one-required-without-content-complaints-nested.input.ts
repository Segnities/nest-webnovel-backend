import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintReasonCreateWithoutContentComplaintsInput } from './complaint-reason-create-without-content-complaints.input';
import { Type } from 'class-transformer';
import { ComplaintReasonCreateOrConnectWithoutContentComplaintsInput } from './complaint-reason-create-or-connect-without-content-complaints.input';
import { ComplaintReasonUpsertWithoutContentComplaintsInput } from './complaint-reason-upsert-without-content-complaints.input';
import { Prisma } from '@prisma/client';
import { ComplaintReasonWhereUniqueInput } from './complaint-reason-where-unique.input';
import { ComplaintReasonUpdateToOneWithWhereWithoutContentComplaintsInput } from './complaint-reason-update-to-one-with-where-without-content-complaints.input';

@InputType()
export class ComplaintReasonUpdateOneRequiredWithoutContentComplaintsNestedInput {

    @Field(() => ComplaintReasonCreateWithoutContentComplaintsInput, {nullable:true})
    @Type(() => ComplaintReasonCreateWithoutContentComplaintsInput)
    create?: ComplaintReasonCreateWithoutContentComplaintsInput;

    @Field(() => ComplaintReasonCreateOrConnectWithoutContentComplaintsInput, {nullable:true})
    @Type(() => ComplaintReasonCreateOrConnectWithoutContentComplaintsInput)
    connectOrCreate?: ComplaintReasonCreateOrConnectWithoutContentComplaintsInput;

    @Field(() => ComplaintReasonUpsertWithoutContentComplaintsInput, {nullable:true})
    @Type(() => ComplaintReasonUpsertWithoutContentComplaintsInput)
    upsert?: ComplaintReasonUpsertWithoutContentComplaintsInput;

    @Field(() => ComplaintReasonWhereUniqueInput, {nullable:true})
    @Type(() => ComplaintReasonWhereUniqueInput)
    connect?: Prisma.AtLeast<ComplaintReasonWhereUniqueInput, 'id'>;

    @Field(() => ComplaintReasonUpdateToOneWithWhereWithoutContentComplaintsInput, {nullable:true})
    @Type(() => ComplaintReasonUpdateToOneWithWhereWithoutContentComplaintsInput)
    update?: ComplaintReasonUpdateToOneWithWhereWithoutContentComplaintsInput;
}
