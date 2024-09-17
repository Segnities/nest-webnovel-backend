import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NovelStatus } from '../prisma/novel-status.enum';
import { NovelTranslationStatus } from '../prisma/novel-translation-status.enum';
import { NovelFormat } from '../prisma/novel-format.enum';
import { NovelCountAggregate } from './novel-count-aggregate.output';
import { NovelAvgAggregate } from './novel-avg-aggregate.output';
import { NovelSumAggregate } from './novel-sum-aggregate.output';
import { NovelMinAggregate } from './novel-min-aggregate.output';
import { NovelMaxAggregate } from './novel-max-aggregate.output';

@ObjectType()
export class NovelGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    original_title?: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    img!: string;

    @Field(() => Boolean, {nullable:false})
    isAdult!: boolean;

    @Field(() => Int, {nullable:true})
    releaseYear?: number;

    @Field(() => String, {nullable:true})
    coverImg?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:false})
    views!: number;

    @Field(() => Int, {nullable:false})
    countryId!: number;

    @Field(() => NovelStatus, {nullable:false})
    status!: keyof typeof NovelStatus;

    @Field(() => Int, {nullable:false})
    authorId!: number;

    @Field(() => NovelTranslationStatus, {nullable:false})
    translationStatus!: keyof typeof NovelTranslationStatus;

    @Field(() => NovelFormat, {nullable:false})
    format!: keyof typeof NovelFormat;

    @Field(() => Int, {nullable:false})
    commendableTypeId!: number;

    @Field(() => Int, {nullable:false})
    complaintTargetId!: number;

    @Field(() => NovelCountAggregate, {nullable:true})
    _count?: NovelCountAggregate;

    @Field(() => NovelAvgAggregate, {nullable:true})
    _avg?: NovelAvgAggregate;

    @Field(() => NovelSumAggregate, {nullable:true})
    _sum?: NovelSumAggregate;

    @Field(() => NovelMinAggregate, {nullable:true})
    _min?: NovelMinAggregate;

    @Field(() => NovelMaxAggregate, {nullable:true})
    _max?: NovelMaxAggregate;
}
