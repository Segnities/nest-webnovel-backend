import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeCreateWithoutChapterInput } from './complaint-target-type-create-without-chapter.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateOrConnectWithoutChapterInput } from './complaint-target-type-create-or-connect-without-chapter.input';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';

@InputType()
export class ComplaintTargetTypeCreateNestedOneWithoutChapterInput {

    @Field(() => ComplaintTargetTypeCreateWithoutChapterInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateWithoutChapterInput)
    create?: ComplaintTargetTypeCreateWithoutChapterInput;

    @Field(() => ComplaintTargetTypeCreateOrConnectWithoutChapterInput, {nullable:true})
    @Type(() => ComplaintTargetTypeCreateOrConnectWithoutChapterInput)
    connectOrCreate?: ComplaintTargetTypeCreateOrConnectWithoutChapterInput;

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;
}
