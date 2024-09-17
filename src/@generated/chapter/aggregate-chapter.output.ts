import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ChapterCountAggregate } from './chapter-count-aggregate.output';
import { ChapterAvgAggregate } from './chapter-avg-aggregate.output';
import { ChapterSumAggregate } from './chapter-sum-aggregate.output';
import { ChapterMinAggregate } from './chapter-min-aggregate.output';
import { ChapterMaxAggregate } from './chapter-max-aggregate.output';

@ObjectType()
export class AggregateChapter {

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
