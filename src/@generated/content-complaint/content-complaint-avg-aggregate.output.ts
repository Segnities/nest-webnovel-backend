import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ContentComplaintAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    contentId?: number;

    @Field(() => Float, {nullable:true})
    reasonId?: number;

    @Field(() => Float, {nullable:true})
    complaintTargetId?: number;

    @Field(() => Float, {nullable:true})
    issuedBy?: number;

    @Field(() => Float, {nullable:true})
    resolvedBy?: number;
}
