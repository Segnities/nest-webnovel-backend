import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ContentComplaintSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    contentId?: number;

    @Field(() => Int, {nullable:true})
    reasonId?: number;

    @Field(() => Int, {nullable:true})
    complaintTargetId?: number;

    @Field(() => Int, {nullable:true})
    issuedBy?: number;

    @Field(() => Int, {nullable:true})
    resolvedBy?: number;
}
