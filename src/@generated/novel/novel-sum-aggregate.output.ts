import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NovelSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    releaseYear?: number;

    @Field(() => Int, {nullable:true})
    views?: number;

    @Field(() => Int, {nullable:true})
    countryId?: number;

    @Field(() => Int, {nullable:true})
    authorId?: number;

    @Field(() => Int, {nullable:true})
    commendableTypeId?: number;

    @Field(() => Int, {nullable:true})
    complaintTargetId?: number;
}
