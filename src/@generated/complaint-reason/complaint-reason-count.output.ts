import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ComplaintReasonCount {

    @Field(() => Int, {nullable:false})
    userComplaints?: number;

    @Field(() => Int, {nullable:false})
    contentComplaints?: number;
}
