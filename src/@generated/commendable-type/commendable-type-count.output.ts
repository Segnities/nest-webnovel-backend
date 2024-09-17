import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CommendableTypeCount {

    @Field(() => Int, {nullable:false})
    novels?: number;

    @Field(() => Int, {nullable:false})
    chapters?: number;

    @Field(() => Int, {nullable:false})
    reviews?: number;

    @Field(() => Int, {nullable:false})
    comments?: number;

    @Field(() => Int, {nullable:false})
    news?: number;
}
