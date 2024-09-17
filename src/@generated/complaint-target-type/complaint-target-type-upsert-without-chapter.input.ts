import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeUpdateWithoutChapterInput } from './complaint-target-type-update-without-chapter.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateWithoutChapterInput } from './complaint-target-type-create-without-chapter.input';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';

@InputType()
export class ComplaintTargetTypeUpsertWithoutChapterInput {

    @Field(() => ComplaintTargetTypeUpdateWithoutChapterInput, {nullable:false})
    @Type(() => ComplaintTargetTypeUpdateWithoutChapterInput)
    update!: ComplaintTargetTypeUpdateWithoutChapterInput;

    @Field(() => ComplaintTargetTypeCreateWithoutChapterInput, {nullable:false})
    @Type(() => ComplaintTargetTypeCreateWithoutChapterInput)
    create!: ComplaintTargetTypeCreateWithoutChapterInput;

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereInput)
    where?: ComplaintTargetTypeWhereInput;
}
