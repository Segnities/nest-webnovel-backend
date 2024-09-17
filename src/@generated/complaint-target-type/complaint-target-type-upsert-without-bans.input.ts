import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeUpdateWithoutBansInput } from './complaint-target-type-update-without-bans.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateWithoutBansInput } from './complaint-target-type-create-without-bans.input';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';

@InputType()
export class ComplaintTargetTypeUpsertWithoutBansInput {

    @Field(() => ComplaintTargetTypeUpdateWithoutBansInput, {nullable:false})
    @Type(() => ComplaintTargetTypeUpdateWithoutBansInput)
    update!: ComplaintTargetTypeUpdateWithoutBansInput;

    @Field(() => ComplaintTargetTypeCreateWithoutBansInput, {nullable:false})
    @Type(() => ComplaintTargetTypeCreateWithoutBansInput)
    create!: ComplaintTargetTypeCreateWithoutBansInput;

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereInput)
    where?: ComplaintTargetTypeWhereInput;
}
