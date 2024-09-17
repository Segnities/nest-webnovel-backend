import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelFormat } from './novel-format.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumNovelFormatFilter } from './nested-enum-novel-format-filter.input';

@InputType()
export class NestedEnumNovelFormatWithAggregatesFilter {

    @Field(() => NovelFormat, {nullable:true})
    equals?: keyof typeof NovelFormat;

    @Field(() => [NovelFormat], {nullable:true})
    in?: Array<keyof typeof NovelFormat>;

    @Field(() => [NovelFormat], {nullable:true})
    notIn?: Array<keyof typeof NovelFormat>;

    @Field(() => NestedEnumNovelFormatWithAggregatesFilter, {nullable:true})
    not?: NestedEnumNovelFormatWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumNovelFormatFilter, {nullable:true})
    _min?: NestedEnumNovelFormatFilter;

    @Field(() => NestedEnumNovelFormatFilter, {nullable:true})
    _max?: NestedEnumNovelFormatFilter;
}
