import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeCreateWithoutComplaintCategoryInput } from './complaint-target-type-create-without-complaint-category.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateOrConnectWithoutComplaintCategoryInput } from './complaint-target-type-create-or-connect-without-complaint-category.input';
import { ComplaintTargetTypeUpsertWithWhereUniqueWithoutComplaintCategoryInput } from './complaint-target-type-upsert-with-where-unique-without-complaint-category.input';
import { ComplaintTargetTypeCreateManyComplaintCategoryInputEnvelope } from './complaint-target-type-create-many-complaint-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';
import { ComplaintTargetTypeUpdateWithWhereUniqueWithoutComplaintCategoryInput } from './complaint-target-type-update-with-where-unique-without-complaint-category.input';
import { ComplaintTargetTypeUpdateManyWithWhereWithoutComplaintCategoryInput } from './complaint-target-type-update-many-with-where-without-complaint-category.input';
import { ComplaintTargetTypeScalarWhereInput } from './complaint-target-type-scalar-where.input';

@InputType()
export class ComplaintTargetTypeUpdateManyWithoutComplaintCategoryNestedInput {

    @Field(() => [ComplaintTargetTypeCreateWithoutComplaintCategoryInput], {nullable:true})
    @Type(() => ComplaintTargetTypeCreateWithoutComplaintCategoryInput)
    create?: Array<ComplaintTargetTypeCreateWithoutComplaintCategoryInput>;

    @Field(() => [ComplaintTargetTypeCreateOrConnectWithoutComplaintCategoryInput], {nullable:true})
    @Type(() => ComplaintTargetTypeCreateOrConnectWithoutComplaintCategoryInput)
    connectOrCreate?: Array<ComplaintTargetTypeCreateOrConnectWithoutComplaintCategoryInput>;

    @Field(() => [ComplaintTargetTypeUpsertWithWhereUniqueWithoutComplaintCategoryInput], {nullable:true})
    @Type(() => ComplaintTargetTypeUpsertWithWhereUniqueWithoutComplaintCategoryInput)
    upsert?: Array<ComplaintTargetTypeUpsertWithWhereUniqueWithoutComplaintCategoryInput>;

    @Field(() => ComplaintTargetTypeCreateManyComplaintCategoryInputEnvelope, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateManyComplaintCategoryInputEnvelope)
    createMany?: ComplaintTargetTypeCreateManyComplaintCategoryInputEnvelope;

    @Field(() => [ComplaintTargetTypeWhereUniqueInput], {nullable:true})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>>;

    @Field(() => [ComplaintTargetTypeWhereUniqueInput], {nullable:true})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>>;

    @Field(() => [ComplaintTargetTypeWhereUniqueInput], {nullable:true})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>>;

    @Field(() => [ComplaintTargetTypeWhereUniqueInput], {nullable:true})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>>;

    @Field(() => [ComplaintTargetTypeUpdateWithWhereUniqueWithoutComplaintCategoryInput], {nullable:true})
    @Type(() => ComplaintTargetTypeUpdateWithWhereUniqueWithoutComplaintCategoryInput)
    update?: Array<ComplaintTargetTypeUpdateWithWhereUniqueWithoutComplaintCategoryInput>;

    @Field(() => [ComplaintTargetTypeUpdateManyWithWhereWithoutComplaintCategoryInput], {nullable:true})
    @Type(() => ComplaintTargetTypeUpdateManyWithWhereWithoutComplaintCategoryInput)
    updateMany?: Array<ComplaintTargetTypeUpdateManyWithWhereWithoutComplaintCategoryInput>;

    @Field(() => [ComplaintTargetTypeScalarWhereInput], {nullable:true})
    @Type(() => ComplaintTargetTypeScalarWhereInput)
    deleteMany?: Array<ComplaintTargetTypeScalarWhereInput>;
}
