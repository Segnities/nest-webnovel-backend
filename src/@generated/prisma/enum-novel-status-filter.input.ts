import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelStatus } from './novel-status.enum';
import { NestedEnumNovelStatusFilter } from './nested-enum-novel-status-filter.input';

@InputType()
export class EnumNovelStatusFilter {

    @Field(() => NovelStatus, {nullable:true})
    equals?: keyof typeof NovelStatus;

    @Field(() => [NovelStatus], {nullable:true})
    in?: Array<keyof typeof NovelStatus>;

    @Field(() => [NovelStatus], {nullable:true})
    notIn?: Array<keyof typeof NovelStatus>;

    @Field(() => NestedEnumNovelStatusFilter, {nullable:true})
    not?: NestedEnumNovelStatusFilter;
}
