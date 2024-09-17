import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplaintReasonWhereInput } from './complaint-reason-where.input';
import { Type } from 'class-transformer';
import { ComplaintReasonOrderByWithRelationInput } from './complaint-reason-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ComplaintReasonWhereUniqueInput } from './complaint-reason-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ComplaintReasonScalarFieldEnum } from './complaint-reason-scalar-field.enum';

@ArgsType()
export class FindFirstComplaintReasonArgs {

    @Field(() => ComplaintReasonWhereInput, {nullable:true})
    @Type(() => ComplaintReasonWhereInput)
    where?: ComplaintReasonWhereInput;

    @Field(() => [ComplaintReasonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ComplaintReasonOrderByWithRelationInput>;

    @Field(() => ComplaintReasonWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ComplaintReasonWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ComplaintReasonScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ComplaintReasonScalarFieldEnum>;
}
