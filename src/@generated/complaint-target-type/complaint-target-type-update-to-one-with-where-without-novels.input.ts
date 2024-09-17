import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeUpdateWithoutNovelsInput } from './complaint-target-type-update-without-novels.input';

@InputType()
export class ComplaintTargetTypeUpdateToOneWithWhereWithoutNovelsInput {

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereInput)
    where?: ComplaintTargetTypeWhereInput;

    @Field(() => ComplaintTargetTypeUpdateWithoutNovelsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeUpdateWithoutNovelsInput)
    data!: ComplaintTargetTypeUpdateWithoutNovelsInput;
}
