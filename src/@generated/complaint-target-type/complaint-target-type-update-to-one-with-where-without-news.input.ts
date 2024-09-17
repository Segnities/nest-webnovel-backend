import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeUpdateWithoutNewsInput } from './complaint-target-type-update-without-news.input';

@InputType()
export class ComplaintTargetTypeUpdateToOneWithWhereWithoutNewsInput {

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereInput)
    where?: ComplaintTargetTypeWhereInput;

    @Field(() => ComplaintTargetTypeUpdateWithoutNewsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeUpdateWithoutNewsInput)
    data!: ComplaintTargetTypeUpdateWithoutNewsInput;
}
