import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ChapterSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    likes?: number;

    @Field(() => Int, {nullable:true})
    novelId?: number;

    @Field(() => Int, {nullable:true})
    commendableTypeId?: number;

    @Field(() => Int, {nullable:true})
    complaitTypeId?: number;

    @Field(() => Int, {nullable:true})
    complaintTargetId?: number;
}
