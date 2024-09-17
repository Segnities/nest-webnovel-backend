import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplaintReasonUpdateInput } from './complaint-reason-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ComplaintReasonWhereUniqueInput } from './complaint-reason-where-unique.input';

@ArgsType()
export class UpdateOneComplaintReasonArgs {

    @Field(() => ComplaintReasonUpdateInput, {nullable:false})
    @Type(() => ComplaintReasonUpdateInput)
    data!: ComplaintReasonUpdateInput;

    @Field(() => ComplaintReasonWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintReasonWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintReasonWhereUniqueInput, 'id'>;
}
