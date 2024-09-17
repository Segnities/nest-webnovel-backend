import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ComplaintTargetTypeCount {

    @Field(() => Int, {nullable:false})
    usersComplaints?: number;

    @Field(() => Int, {nullable:false})
    contentComplaints?: number;

    @Field(() => Int, {nullable:false})
    bans?: number;

    @Field(() => Int, {nullable:false})
    novels?: number;

    @Field(() => Int, {nullable:false})
    reviews?: number;

    @Field(() => Int, {nullable:false})
    news?: number;

    @Field(() => Int, {nullable:false})
    comments?: number;

    @Field(() => Int, {nullable:false})
    chapter?: number;
}
