import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Novel } from '../novel/novel.model';

@ObjectType()
export class NovelRating {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    votesCount!: number;

    @Field(() => Float, {nullable:false})
    avgRating!: number;

    @Field(() => Int, {nullable:false})
    totalRating!: number;

    @Field(() => Int, {nullable:false})
    novelId!: number;

    @Field(() => Novel, {nullable:false})
    novel?: Novel;
}
