import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeCreateWithoutComplaintCategoryInput } from './complaint-target-type-create-without-complaint-category.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateOrConnectWithoutComplaintCategoryInput } from './complaint-target-type-create-or-connect-without-complaint-category.input';
import { ComplaintTargetTypeCreateManyComplaintCategoryInputEnvelope } from './complaint-target-type-create-many-complaint-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';

@InputType()
export class ComplaintTargetTypeUncheckedCreateNestedManyWithoutComplaintCategoryInput {

    @Field(() => [ComplaintTargetTypeCreateWithoutComplaintCategoryInput], {nullable:true})
    @Type(() => ComplaintTargetTypeCreateWithoutComplaintCategoryInput)
    create?: Array<ComplaintTargetTypeCreateWithoutComplaintCategoryInput>;

    @Field(() => [ComplaintTargetTypeCreateOrConnectWithoutComplaintCategoryInput], {nullable:true})
    @Type(() => ComplaintTargetTypeCreateOrConnectWithoutComplaintCategoryInput)
    connectOrCreate?: Array<ComplaintTargetTypeCreateOrConnectWithoutComplaintCategoryInput>;

    @Field(() => ComplaintTargetTypeCreateManyComplaintCategoryInputEnvelope, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateManyComplaintCategoryInputEnvelope)
    createMany?: ComplaintTargetTypeCreateManyComplaintCategoryInputEnvelope;

    @Field(() => [ComplaintTargetTypeWhereUniqueInput], {nullable:true})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>>;
}
