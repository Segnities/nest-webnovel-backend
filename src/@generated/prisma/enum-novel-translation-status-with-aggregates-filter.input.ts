import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelTranslationStatus } from './novel-translation-status.enum';
import { NestedEnumNovelTranslationStatusWithAggregatesFilter } from './nested-enum-novel-translation-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumNovelTranslationStatusFilter } from './nested-enum-novel-translation-status-filter.input';

@InputType()
export class EnumNovelTranslationStatusWithAggregatesFilter {

    @Field(() => NovelTranslationStatus, {nullable:true})
    equals?: keyof typeof NovelTranslationStatus;

    @Field(() => [NovelTranslationStatus], {nullable:true})
    in?: Array<keyof typeof NovelTranslationStatus>;

    @Field(() => [NovelTranslationStatus], {nullable:true})
    notIn?: Array<keyof typeof NovelTranslationStatus>;

    @Field(() => NestedEnumNovelTranslationStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumNovelTranslationStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumNovelTranslationStatusFilter, {nullable:true})
    _min?: NestedEnumNovelTranslationStatusFilter;

    @Field(() => NestedEnumNovelTranslationStatusFilter, {nullable:true})
    _max?: NestedEnumNovelTranslationStatusFilter;
}
