import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';

@InputType()
export class ComplaintTargetTypeRelationFilter {

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    is?: ComplaintTargetTypeWhereInput;

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    isNot?: ComplaintTargetTypeWhereInput;
}
