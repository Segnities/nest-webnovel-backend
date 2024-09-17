import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ChapterCountAggregate } from './chapter-count-aggregate.output';
import { ChapterAvgAggregate } from './chapter-avg-aggregate.output';
import { ChapterSumAggregate } from './chapter-sum-aggregate.output';
import { ChapterMinAggregate } from './chapter-min-aggregate.output';
import { ChapterMaxAggregate } from './chapter-max-aggregate.output';

@ObjectType()
export class ChapterGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    likes!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    novelId!: number;

    @Field(() => Int, {nullable:false})
    commendableTypeId!: number;

    @Field(() => Int, {nullable:false})
    complaitTypeId!: number;

    @Field(() => Int, {nullable:false})
    complaintTargetId!: number;

    @Field(() => ChapterCountAggregate, {nullable:true})
    _count?: ChapterCountAggregate;

    @Field(() => ChapterAvgAggregate, {nullable:true})
    _avg?: ChapterAvgAggregate;

    @Field(() => ChapterSumAggregate, {nullable:true})
    _sum?: ChapterSumAggregate;

    @Field(() => ChapterMinAggregate, {nullable:true})
    _min?: ChapterMinAggregate;

    @Field(() => ChapterMaxAggregate, {nullable:true})
    _max?: ChapterMaxAggregate;
}
