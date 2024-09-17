import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeUpdateWithoutBansInput } from './complaint-target-type-update-without-bans.input';

@InputType()
export class ComplaintTargetTypeUpdateToOneWithWhereWithoutBansInput {

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereInput)
    where?: ComplaintTargetTypeWhereInput;

    @Field(() => ComplaintTargetTypeUpdateWithoutBansInput, {nullable:false})
    @Type(() => ComplaintTargetTypeUpdateWithoutBansInput)
    data!: ComplaintTargetTypeUpdateWithoutBansInput;
}
