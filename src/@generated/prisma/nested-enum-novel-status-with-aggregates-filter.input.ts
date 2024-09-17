import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelStatus } from './novel-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumNovelStatusFilter } from './nested-enum-novel-status-filter.input';

@InputType()
export class NestedEnumNovelStatusWithAggregatesFilter {

    @Field(() => NovelStatus, {nullable:true})
    equals?: keyof typeof NovelStatus;

    @Field(() => [NovelStatus], {nullable:true})
    in?: Array<keyof typeof NovelStatus>;

    @Field(() => [NovelStatus], {nullable:true})
    notIn?: Array<keyof typeof NovelStatus>;

    @Field(() => NestedEnumNovelStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumNovelStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumNovelStatusFilter, {nullable:true})
    _min?: NestedEnumNovelStatusFilter;

    @Field(() => NestedEnumNovelStatusFilter, {nullable:true})
    _max?: NestedEnumNovelStatusFilter;
}
