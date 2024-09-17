import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintReasonCreateWithoutUserComplaintsInput } from './complaint-reason-create-without-user-complaints.input';
import { Type } from 'class-transformer';
import { ComplaintReasonCreateOrConnectWithoutUserComplaintsInput } from './complaint-reason-create-or-connect-without-user-complaints.input';
import { ComplaintReasonUpsertWithoutUserComplaintsInput } from './complaint-reason-upsert-without-user-complaints.input';
import { Prisma } from '@prisma/client';
import { ComplaintReasonWhereUniqueInput } from './complaint-reason-where-unique.input';
import { ComplaintReasonUpdateToOneWithWhereWithoutUserComplaintsInput } from './complaint-reason-update-to-one-with-where-without-user-complaints.input';

@InputType()
export class ComplaintReasonUpdateOneRequiredWithoutUserComplaintsNestedInput {

    @Field(() => ComplaintReasonCreateWithoutUserComplaintsInput, {nullable:true})
    @Type(() => ComplaintReasonCreateWithoutUserComplaintsInput)
    create?: ComplaintReasonCreateWithoutUserComplaintsInput;

    @Field(() => ComplaintReasonCreateOrConnectWithoutUserComplaintsInput, {nullable:true})
    @Type(() => ComplaintReasonCreateOrConnectWithoutUserComplaintsInput)
    connectOrCreate?: ComplaintReasonCreateOrConnectWithoutUserComplaintsInput;

    @Field(() => ComplaintReasonUpsertWithoutUserComplaintsInput, {nullable:true})
    @Type(() => ComplaintReasonUpsertWithoutUserComplaintsInput)
    upsert?: ComplaintReasonUpsertWithoutUserComplaintsInput;

    @Field(() => ComplaintReasonWhereUniqueInput, {nullable:true})
    @Type(() => ComplaintReasonWhereUniqueInput)
    connect?: Prisma.AtLeast<ComplaintReasonWhereUniqueInput, 'id'>;

    @Field(() => ComplaintReasonUpdateToOneWithWhereWithoutUserComplaintsInput, {nullable:true})
    @Type(() => ComplaintReasonUpdateToOneWithWhereWithoutUserComplaintsInput)
    update?: ComplaintReasonUpdateToOneWithWhereWithoutUserComplaintsInput;
}
