import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelTranslationStatus } from './novel-translation-status.enum';

@InputType()
export class NestedEnumNovelTranslationStatusFilter {

    @Field(() => NovelTranslationStatus, {nullable:true})
    equals?: keyof typeof NovelTranslationStatus;

    @Field(() => [NovelTranslationStatus], {nullable:true})
    in?: Array<keyof typeof NovelTranslationStatus>;

    @Field(() => [NovelTranslationStatus], {nullable:true})
    notIn?: Array<keyof typeof NovelTranslationStatus>;

    @Field(() => NestedEnumNovelTranslationStatusFilter, {nullable:true})
    not?: NestedEnumNovelTranslationStatusFilter;
}
