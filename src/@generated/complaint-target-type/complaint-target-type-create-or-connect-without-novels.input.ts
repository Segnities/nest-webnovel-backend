import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateWithoutNovelsInput } from './complaint-target-type-create-without-novels.input';

@InputType()
export class ComplaintTargetTypeCreateOrConnectWithoutNovelsInput {

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;

    @Field(() => ComplaintTargetTypeCreateWithoutNovelsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeCreateWithoutNovelsInput)
    create!: ComplaintTargetTypeCreateWithoutNovelsInput;
}
