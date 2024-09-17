import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintReasonCreateWithoutUserInput } from './complaint-reason-create-without-user.input';
import { Type } from 'class-transformer';
import { ComplaintReasonCreateOrConnectWithoutUserInput } from './complaint-reason-create-or-connect-without-user.input';
import { ComplaintReasonUpsertWithWhereUniqueWithoutUserInput } from './complaint-reason-upsert-with-where-unique-without-user.input';
import { ComplaintReasonCreateManyUserInputEnvelope } from './complaint-reason-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ComplaintReasonWhereUniqueInput } from './complaint-reason-where-unique.input';
import { ComplaintReasonUpdateWithWhereUniqueWithoutUserInput } from './complaint-reason-update-with-where-unique-without-user.input';
import { ComplaintReasonUpdateManyWithWhereWithoutUserInput } from './complaint-reason-update-many-with-where-without-user.input';
import { ComplaintReasonScalarWhereInput } from './complaint-reason-scalar-where.input';

@InputType()
export class ComplaintReasonUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [ComplaintReasonCreateWithoutUserInput], {nullable:true})
    @Type(() => ComplaintReasonCreateWithoutUserInput)
    create?: Array<ComplaintReasonCreateWithoutUserInput>;

    @Field(() => [ComplaintReasonCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ComplaintReasonCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ComplaintReasonCreateOrConnectWithoutUserInput>;

    @Field(() => [ComplaintReasonUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ComplaintReasonUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ComplaintReasonUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ComplaintReasonCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ComplaintReasonCreateManyUserInputEnvelope)
    createMany?: ComplaintReasonCreateManyUserInputEnvelope;

    @Field(() => [ComplaintReasonWhereUniqueInput], {nullable:true})
    @Type(() => ComplaintReasonWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ComplaintReasonWhereUniqueInput, 'id'>>;

    @Field(() => [ComplaintReasonWhereUniqueInput], {nullable:true})
    @Type(() => ComplaintReasonWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ComplaintReasonWhereUniqueInput, 'id'>>;

    @Field(() => [ComplaintReasonWhereUniqueInput], {nullable:true})
    @Type(() => ComplaintReasonWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ComplaintReasonWhereUniqueInput, 'id'>>;

    @Field(() => [ComplaintReasonWhereUniqueInput], {nullable:true})
    @Type(() => ComplaintReasonWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ComplaintReasonWhereUniqueInput, 'id'>>;

    @Field(() => [ComplaintReasonUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ComplaintReasonUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ComplaintReasonUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ComplaintReasonUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ComplaintReasonUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ComplaintReasonUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ComplaintReasonScalarWhereInput], {nullable:true})
    @Type(() => ComplaintReasonScalarWhereInput)
    deleteMany?: Array<ComplaintReasonScalarWhereInput>;
}
