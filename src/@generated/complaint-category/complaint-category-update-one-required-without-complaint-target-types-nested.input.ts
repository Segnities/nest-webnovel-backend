import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintCategoryCreateWithoutComplaintTargetTypesInput } from './complaint-category-create-without-complaint-target-types.input';
import { Type } from 'class-transformer';
import { ComplaintCategoryCreateOrConnectWithoutComplaintTargetTypesInput } from './complaint-category-create-or-connect-without-complaint-target-types.input';
import { ComplaintCategoryUpsertWithoutComplaintTargetTypesInput } from './complaint-category-upsert-without-complaint-target-types.input';
import { Prisma } from '@prisma/client';
import { ComplaintCategoryWhereUniqueInput } from './complaint-category-where-unique.input';
import { ComplaintCategoryUpdateToOneWithWhereWithoutComplaintTargetTypesInput } from './complaint-category-update-to-one-with-where-without-complaint-target-types.input';

@InputType()
export class ComplaintCategoryUpdateOneRequiredWithoutComplaintTargetTypesNestedInput {

    @Field(() => ComplaintCategoryCreateWithoutComplaintTargetTypesInput, {nullable:true})
    @Type(() => ComplaintCategoryCreateWithoutComplaintTargetTypesInput)
    create?: ComplaintCategoryCreateWithoutComplaintTargetTypesInput;

    @Field(() => ComplaintCategoryCreateOrConnectWithoutComplaintTargetTypesInput, {nullable:true})
    @Type(() => ComplaintCategoryCreateOrConnectWithoutComplaintTargetTypesInput)
    connectOrCreate?: ComplaintCategoryCreateOrConnectWithoutComplaintTargetTypesInput;

    @Field(() => ComplaintCategoryUpsertWithoutComplaintTargetTypesInput, {nullable:true})
    @Type(() => ComplaintCategoryUpsertWithoutComplaintTargetTypesInput)
    upsert?: ComplaintCategoryUpsertWithoutComplaintTargetTypesInput;

    @Field(() => ComplaintCategoryWhereUniqueInput, {nullable:true})
    @Type(() => ComplaintCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<ComplaintCategoryWhereUniqueInput, 'id'>;

    @Field(() => ComplaintCategoryUpdateToOneWithWhereWithoutComplaintTargetTypesInput, {nullable:true})
    @Type(() => ComplaintCategoryUpdateToOneWithWhereWithoutComplaintTargetTypesInput)
    update?: ComplaintCategoryUpdateToOneWithWhereWithoutComplaintTargetTypesInput;
}
