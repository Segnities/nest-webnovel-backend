import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneComplaintTargetTypeArgs {

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;
}
