import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NovelStatus } from '../prisma/novel-status.enum';
import { NovelTranslationStatus } from '../prisma/novel-translation-status.enum';
import { NovelFormat } from '../prisma/novel-format.enum';

@InputType()
export class NovelCreateManyAuthorInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    views?: number;

    @Field(() => Int, {nullable:false})
    countryId!: number;

    @Field(() => NovelStatus, {nullable:false})
    status!: keyof typeof NovelStatus;

    @Field(() => NovelTranslationStatus, {nullable:false})
    translationStatus!: keyof typeof NovelTranslationStatus;

    @Field(() => NovelFormat, {nullable:false})
    format!: keyof typeof NovelFormat;

    @Field(() => Int, {nullable:false})
    commendableTypeId!: number;

    @Field(() => Int, {nullable:false})
    complaintTargetId!: number;
}
