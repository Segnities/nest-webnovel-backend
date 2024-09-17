import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeOrderByWithRelationInput } from './complaint-target-type-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ComplaintTargetTypeScalarFieldEnum } from './complaint-target-type-scalar-field.enum';

@ArgsType()
export class FindManyComplaintTargetTypeArgs {

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereInput)
    where?: ComplaintTargetTypeWhereInput;

    @Field(() => [ComplaintTargetTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ComplaintTargetTypeOrderByWithRelationInput>;

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ComplaintTargetTypeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ComplaintTargetTypeScalarFieldEnum>;
}
