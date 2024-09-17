import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintReasonWhereInput } from './complaint-reason-where.input';

@InputType()
export class ComplaintReasonListRelationFilter {

    @Field(() => ComplaintReasonWhereInput, {nullable:true})
    every?: ComplaintReasonWhereInput;

    @Field(() => ComplaintReasonWhereInput, {nullable:true})
    some?: ComplaintReasonWhereInput;

    @Field(() => ComplaintReasonWhereInput, {nullable:true})
    none?: ComplaintReasonWhereInput;
}
