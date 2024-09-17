import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeUpdateWithoutCommentsInput } from './complaint-target-type-update-without-comments.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateWithoutCommentsInput } from './complaint-target-type-create-without-comments.input';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';

@InputType()
export class ComplaintTargetTypeUpsertWithoutCommentsInput {

    @Field(() => ComplaintTargetTypeUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeUpdateWithoutCommentsInput)
    update!: ComplaintTargetTypeUpdateWithoutCommentsInput;

    @Field(() => ComplaintTargetTypeCreateWithoutCommentsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeCreateWithoutCommentsInput)
    create!: ComplaintTargetTypeCreateWithoutCommentsInput;

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereInput)
    where?: ComplaintTargetTypeWhereInput;
}
