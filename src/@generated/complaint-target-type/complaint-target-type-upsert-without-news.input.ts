import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeUpdateWithoutNewsInput } from './complaint-target-type-update-without-news.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateWithoutNewsInput } from './complaint-target-type-create-without-news.input';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';

@InputType()
export class ComplaintTargetTypeUpsertWithoutNewsInput {

    @Field(() => ComplaintTargetTypeUpdateWithoutNewsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeUpdateWithoutNewsInput)
    update!: ComplaintTargetTypeUpdateWithoutNewsInput;

    @Field(() => ComplaintTargetTypeCreateWithoutNewsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeCreateWithoutNewsInput)
    create!: ComplaintTargetTypeCreateWithoutNewsInput;

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereInput)
    where?: ComplaintTargetTypeWhereInput;
}
