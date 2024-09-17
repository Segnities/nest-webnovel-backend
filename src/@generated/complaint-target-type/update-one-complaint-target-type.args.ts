import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplaintTargetTypeUpdateInput } from './complaint-target-type-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';

@ArgsType()
export class UpdateOneComplaintTargetTypeArgs {

    @Field(() => ComplaintTargetTypeUpdateInput, {nullable:false})
    @Type(() => ComplaintTargetTypeUpdateInput)
    data!: ComplaintTargetTypeUpdateInput;

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;
}
