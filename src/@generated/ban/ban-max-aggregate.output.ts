import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BanMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    banStart?: Date | string;

    @Field(() => Date, {nullable:true})
    banEnd?: Date | string;

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => Boolean, {nullable:true})
    appealed?: boolean;

    @Field(() => Int, {nullable:true})
    appealId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    issuedBy?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    complaintTargetId?: number;
}
