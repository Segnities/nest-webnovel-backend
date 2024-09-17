import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NovelStatus } from '../prisma/novel-status.enum';
import { NovelTranslationStatus } from '../prisma/novel-translation-status.enum';
import { NovelFormat } from '../prisma/novel-format.enum';

@ObjectType()
export class NovelMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    original_title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    img?: string;

    @Field(() => Boolean, {nullable:true})
    isAdult?: boolean;

    @Field(() => Int, {nullable:true})
    releaseYear?: number;

    @Field(() => String, {nullable:true})
    coverImg?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    views?: number;

    @Field(() => Int, {nullable:true})
    countryId?: number;

    @Field(() => NovelStatus, {nullable:true})
    status?: keyof typeof NovelStatus;

    @Field(() => Int, {nullable:true})
    authorId?: number;

    @Field(() => NovelTranslationStatus, {nullable:true})
    translationStatus?: keyof typeof NovelTranslationStatus;

    @Field(() => NovelFormat, {nullable:true})
    format?: keyof typeof NovelFormat;

    @Field(() => Int, {nullable:true})
    commendableTypeId?: number;

    @Field(() => Int, {nullable:true})
    complaintTargetId?: number;
}
