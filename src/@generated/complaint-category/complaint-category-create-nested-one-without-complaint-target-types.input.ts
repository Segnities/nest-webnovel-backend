import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintCategoryCreateWithoutComplaintTargetTypesInput } from './complaint-category-create-without-complaint-target-types.input';
import { Type } from 'class-transformer';
import { ComplaintCategoryCreateOrConnectWithoutComplaintTargetTypesInput } from './complaint-category-create-or-connect-without-complaint-target-types.input';
import { Prisma } from '@prisma/client';
import { ComplaintCategoryWhereUniqueInput } from './complaint-category-where-unique.input';

@InputType()
export class ComplaintCategoryCreateNestedOneWithoutComplaintTargetTypesInput {

    @Field(() => ComplaintCategoryCreateWithoutComplaintTargetTypesInput, {nullable:true})
    @Type(() => ComplaintCategoryCreateWithoutComplaintTargetTypesInput)
    create?: ComplaintCategoryCreateWithoutComplaintTargetTypesInput;

    @Field(() => ComplaintCategoryCreateOrConnectWithoutComplaintTargetTypesInput, {nullable:true})
    @Type(() => ComplaintCategoryCreateOrConnectWithoutComplaintTargetTypesInput)
    connectOrCreate?: ComplaintCategoryCreateOrConnectWithoutComplaintTargetTypesInput;

    @Field(() => ComplaintCategoryWhereUniqueInput, {nullable:true})
    @Type(() => ComplaintCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<ComplaintCategoryWhereUniqueInput, 'id'>;
}
