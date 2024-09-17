import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelStatus } from './novel-status.enum';

@InputType()
export class NestedEnumNovelStatusFilter {

    @Field(() => NovelStatus, {nullable:true})
    equals?: keyof typeof NovelStatus;

    @Field(() => [NovelStatus], {nullable:true})
    in?: Array<keyof typeof NovelStatus>;

    @Field(() => [NovelStatus], {nullable:true})
    notIn?: Array<keyof typeof NovelStatus>;

    @Field(() => NestedEnumNovelStatusFilter, {nullable:true})
    not?: NestedEnumNovelStatusFilter;
}
