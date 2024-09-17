import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeUpdateWithoutChapterInput } from './complaint-target-type-update-without-chapter.input';

@InputType()
export class ComplaintTargetTypeUpdateToOneWithWhereWithoutChapterInput {

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereInput)
    where?: ComplaintTargetTypeWhereInput;

    @Field(() => ComplaintTargetTypeUpdateWithoutChapterInput, {nullable:false})
    @Type(() => ComplaintTargetTypeUpdateWithoutChapterInput)
    data!: ComplaintTargetTypeUpdateWithoutChapterInput;
}
