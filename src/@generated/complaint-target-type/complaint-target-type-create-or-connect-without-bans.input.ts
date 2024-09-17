import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateWithoutBansInput } from './complaint-target-type-create-without-bans.input';

@InputType()
export class ComplaintTargetTypeCreateOrConnectWithoutBansInput {

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;

    @Field(() => ComplaintTargetTypeCreateWithoutBansInput, {nullable:false})
    @Type(() => ComplaintTargetTypeCreateWithoutBansInput)
    create!: ComplaintTargetTypeCreateWithoutBansInput;
}
