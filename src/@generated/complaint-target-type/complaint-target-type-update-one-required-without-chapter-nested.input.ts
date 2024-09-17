import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeCreateWithoutChapterInput } from './complaint-target-type-create-without-chapter.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateOrConnectWithoutChapterInput } from './complaint-target-type-create-or-connect-without-chapter.input';
import { ComplaintTargetTypeUpsertWithoutChapterInput } from './complaint-target-type-upsert-without-chapter.input';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';
import { ComplaintTargetTypeUpdateToOneWithWhereWithoutChapterInput } from './complaint-target-type-update-to-one-with-where-without-chapter.input';

@InputType()
export class ComplaintTargetTypeUpdateOneRequiredWithoutChapterNestedInput {

    @Field(() => ComplaintTargetTypeCreateWithoutChapterInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateWithoutChapterInput)
    create?: ComplaintTargetTypeCreateWithoutChapterInput;

    @Field(() => ComplaintTargetTypeCreateOrConnectWithoutChapterInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateOrConnectWithoutChapterInput)
    connectOrCreate?: ComplaintTargetTypeCreateOrConnectWithoutChapterInput;

    @Field(() => ComplaintTargetTypeUpsertWithoutChapterInput, {nullable:true})
    @Type(() => ComplaintTargetTypeUpsertWithoutChapterInput)
    upsert?: ComplaintTargetTypeUpsertWithoutChapterInput;

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;

    @Field(() => ComplaintTargetTypeUpdateToOneWithWhereWithoutChapterInput, {nullable:true})
    @Type(() => ComplaintTargetTypeUpdateToOneWithWhereWithoutChapterInput)
    update?: ComplaintTargetTypeUpdateToOneWithWhereWithoutChapterInput;
}
