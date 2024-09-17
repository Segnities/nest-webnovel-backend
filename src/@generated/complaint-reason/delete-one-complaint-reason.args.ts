import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ComplaintReasonWhereUniqueInput } from './complaint-reason-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneComplaintReasonArgs {

    @Field(() => ComplaintReasonWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintReasonWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintReasonWhereUniqueInput, 'id'>;
}
