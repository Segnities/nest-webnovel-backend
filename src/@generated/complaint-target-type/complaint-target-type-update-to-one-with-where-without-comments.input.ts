import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeUpdateWithoutCommentsInput } from './complaint-target-type-update-without-comments.input';

@InputType()
export class ComplaintTargetTypeUpdateToOneWithWhereWithoutCommentsInput {

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereInput)
    where?: ComplaintTargetTypeWhereInput;

    @Field(() => ComplaintTargetTypeUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeUpdateWithoutCommentsInput)
    data!: ComplaintTargetTypeUpdateWithoutCommentsInput;
}
