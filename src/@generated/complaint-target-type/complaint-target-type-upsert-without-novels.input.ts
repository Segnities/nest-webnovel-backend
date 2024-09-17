import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeUpdateWithoutNovelsInput } from './complaint-target-type-update-without-novels.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateWithoutNovelsInput } from './complaint-target-type-create-without-novels.input';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';

@InputType()
export class ComplaintTargetTypeUpsertWithoutNovelsInput {

    @Field(() => ComplaintTargetTypeUpdateWithoutNovelsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeUpdateWithoutNovelsInput)
    update!: ComplaintTargetTypeUpdateWithoutNovelsInput;

    @Field(() => ComplaintTargetTypeCreateWithoutNovelsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeCreateWithoutNovelsInput)
    create!: ComplaintTargetTypeCreateWithoutNovelsInput;

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereInput)
    where?: ComplaintTargetTypeWhereInput;
}
