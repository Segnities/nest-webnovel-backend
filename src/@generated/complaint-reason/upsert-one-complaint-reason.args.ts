import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ComplaintReasonWhereUniqueInput } from './complaint-reason-where-unique.input';
import { Type } from 'class-transformer';
import { ComplaintReasonCreateInput } from './complaint-reason-create.input';
import { ComplaintReasonUpdateInput } from './complaint-reason-update.input';

@ArgsType()
export class UpsertOneComplaintReasonArgs {

    @Field(() => ComplaintReasonWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintReasonWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintReasonWhereUniqueInput, 'id'>;

    @Field(() => ComplaintReasonCreateInput, {nullable:false})
    @Type(() => ComplaintReasonCreateInput)
    create!: ComplaintReasonCreateInput;

    @Field(() => ComplaintReasonUpdateInput, {nullable:false})
    @Type(() => ComplaintReasonUpdateInput)
    update!: ComplaintReasonUpdateInput;
}
