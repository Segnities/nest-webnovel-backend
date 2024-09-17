import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NovelCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    original_title!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    img!: number;

    @Field(() => Int, {nullable:false})
    isAdult!: number;

    @Field(() => Int, {nullable:false})
    releaseYear!: number;

    @Field(() => Int, {nullable:false})
    coverImg!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    views!: number;

    @Field(() => Int, {nullable:false})
    countryId!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    authorId!: number;

    @Field(() => Int, {nullable:false})
    translationStatus!: number;

    @Field(() => Int, {nullable:false})
    format!: number;

    @Field(() => Int, {nullable:false})
    commendableTypeId!: number;

    @Field(() => Int, {nullable:false})
    complaintTargetId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
