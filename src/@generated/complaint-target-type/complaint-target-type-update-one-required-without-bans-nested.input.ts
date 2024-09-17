import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeCreateWithoutBansInput } from './complaint-target-type-create-without-bans.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateOrConnectWithoutBansInput } from './complaint-target-type-create-or-connect-without-bans.input';
import { ComplaintTargetTypeUpsertWithoutBansInput } from './complaint-target-type-upsert-without-bans.input';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';
import { ComplaintTargetTypeUpdateToOneWithWhereWithoutBansInput } from './complaint-target-type-update-to-one-with-where-without-bans.input';

@InputType()
export class ComplaintTargetTypeUpdateOneRequiredWithoutBansNestedInput {

    @Field(() => ComplaintTargetTypeCreateWithoutBansInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateWithoutBansInput)
    create?: ComplaintTargetTypeCreateWithoutBansInput;

    @Field(() => ComplaintTargetTypeCreateOrConnectWithoutBansInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateOrConnectWithoutBansInput)
    connectOrCreate?: ComplaintTargetTypeCreateOrConnectWithoutBansInput;

    @Field(() => ComplaintTargetTypeUpsertWithoutBansInput, {nullable:true})
    @Type(() => ComplaintTargetTypeUpsertWithoutBansInput)
    upsert?: ComplaintTargetTypeUpsertWithoutBansInput;

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;

    @Field(() => ComplaintTargetTypeUpdateToOneWithWhereWithoutBansInput, {nullable:true})
    @Type(() => ComplaintTargetTypeUpdateToOneWithWhereWithoutBansInput)
    update?: ComplaintTargetTypeUpdateToOneWithWhereWithoutBansInput;
}
