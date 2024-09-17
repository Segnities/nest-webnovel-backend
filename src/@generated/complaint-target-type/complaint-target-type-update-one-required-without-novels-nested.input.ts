import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeCreateWithoutNovelsInput } from './complaint-target-type-create-without-novels.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateOrConnectWithoutNovelsInput } from './complaint-target-type-create-or-connect-without-novels.input';
import { ComplaintTargetTypeUpsertWithoutNovelsInput } from './complaint-target-type-upsert-without-novels.input';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';
import { ComplaintTargetTypeUpdateToOneWithWhereWithoutNovelsInput } from './complaint-target-type-update-to-one-with-where-without-novels.input';

@InputType()
export class ComplaintTargetTypeUpdateOneRequiredWithoutNovelsNestedInput {

    @Field(() => ComplaintTargetTypeCreateWithoutNovelsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateWithoutNovelsInput)
    create?: ComplaintTargetTypeCreateWithoutNovelsInput;

    @Field(() => ComplaintTargetTypeCreateOrConnectWithoutNovelsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateOrConnectWithoutNovelsInput)
    connectOrCreate?: ComplaintTargetTypeCreateOrConnectWithoutNovelsInput;

    @Field(() => ComplaintTargetTypeUpsertWithoutNovelsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeUpsertWithoutNovelsInput)
    upsert?: ComplaintTargetTypeUpsertWithoutNovelsInput;

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;

    @Field(() => ComplaintTargetTypeUpdateToOneWithWhereWithoutNovelsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeUpdateToOneWithWhereWithoutNovelsInput)
    update?: ComplaintTargetTypeUpdateToOneWithWhereWithoutNovelsInput;
}
