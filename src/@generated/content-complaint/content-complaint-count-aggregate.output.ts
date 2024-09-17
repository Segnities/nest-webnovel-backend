import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ContentComplaintCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    contentId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    reasonId!: number;

    @Field(() => Int, {nullable:false})
    complaintTargetId!: number;

    @Field(() => Int, {nullable:false})
    resolvedAt!: number;

    @Field(() => Int, {nullable:false})
    issuedBy!: number;

    @Field(() => Int, {nullable:false})
    resolvedBy!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
