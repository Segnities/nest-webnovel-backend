import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';

@InputType()
export class ComplaintTargetTypeListRelationFilter {

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    every?: ComplaintTargetTypeWhereInput;

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    some?: ComplaintTargetTypeWhereInput;

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    none?: ComplaintTargetTypeWhereInput;
}
