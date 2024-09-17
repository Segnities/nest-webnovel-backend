import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateInput } from './complaint-target-type-create.input';
import { ComplaintTargetTypeUpdateInput } from './complaint-target-type-update.input';

@ArgsType()
export class UpsertOneComplaintTargetTypeArgs {

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;

    @Field(() => ComplaintTargetTypeCreateInput, {nullable:false})
    @Type(() => ComplaintTargetTypeCreateInput)
    create!: ComplaintTargetTypeCreateInput;

    @Field(() => ComplaintTargetTypeUpdateInput, {nullable:false})
    @Type(() => ComplaintTargetTypeUpdateInput)
    update!: ComplaintTargetTypeUpdateInput;
}
