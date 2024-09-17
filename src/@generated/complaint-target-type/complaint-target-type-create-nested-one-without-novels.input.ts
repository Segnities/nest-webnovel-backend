import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeCreateWithoutNovelsInput } from './complaint-target-type-create-without-novels.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateOrConnectWithoutNovelsInput } from './complaint-target-type-create-or-connect-without-novels.input';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';

@InputType()
export class ComplaintTargetTypeCreateNestedOneWithoutNovelsInput {

    @Field(() => ComplaintTargetTypeCreateWithoutNovelsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateWithoutNovelsInput)
    create?: ComplaintTargetTypeCreateWithoutNovelsInput;

    @Field(() => ComplaintTargetTypeCreateOrConnectWithoutNovelsInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateOrConnectWithoutNovelsInput)
    connectOrCreate?: ComplaintTargetTypeCreateOrConnectWithoutNovelsInput;

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;
}
