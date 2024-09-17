import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelFormat } from './novel-format.enum';

@InputType()
export class NestedEnumNovelFormatFilter {

    @Field(() => NovelFormat, {nullable:true})
    equals?: keyof typeof NovelFormat;

    @Field(() => [NovelFormat], {nullable:true})
    in?: Array<keyof typeof NovelFormat>;

    @Field(() => [NovelFormat], {nullable:true})
    notIn?: Array<keyof typeof NovelFormat>;

    @Field(() => NestedEnumNovelFormatFilter, {nullable:true})
    not?: NestedEnumNovelFormatFilter;
}
