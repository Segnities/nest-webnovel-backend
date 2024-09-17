import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateWithoutChapterInput } from './complaint-target-type-create-without-chapter.input';

@InputType()
export class ComplaintTargetTypeCreateOrConnectWithoutChapterInput {

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;

    @Field(() => ComplaintTargetTypeCreateWithoutChapterInput, {nullable:false})
    @Type(() => ComplaintTargetTypeCreateWithoutChapterInput)
    create!: ComplaintTargetTypeCreateWithoutChapterInput;
}
