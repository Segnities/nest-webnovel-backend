import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintReasonWhereInput } from './complaint-reason-where.input';

@InputType()
export class ComplaintReasonRelationFilter {

    @Field(() => ComplaintReasonWhereInput, {nullable:true})
    is?: ComplaintReasonWhereInput;

    @Field(() => ComplaintReasonWhereInput, {nullable:true})
    isNot?: ComplaintReasonWhereInput;
}
