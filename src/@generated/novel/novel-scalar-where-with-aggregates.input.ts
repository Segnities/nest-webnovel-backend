import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumNovelStatusWithAggregatesFilter } from '../prisma/enum-novel-status-with-aggregates-filter.input';
import { EnumNovelTranslationStatusWithAggregatesFilter } from '../prisma/enum-novel-translation-status-with-aggregates-filter.input';
import { EnumNovelFormatWithAggregatesFilter } from '../prisma/enum-novel-format-with-aggregates-filter.input';

@InputType()
export class NovelScalarWhereWithAggregatesInput {

    @Field(() => [NovelScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NovelScalarWhereWithAggregatesInput>;

    @Field(() => [NovelScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NovelScalarWhereWithAggregatesInput>;

    @Field(() => [NovelScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NovelScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    original_title?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    img?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isAdult?: BoolWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    releaseYear?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    coverImg?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    views?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    countryId?: IntWithAggregatesFilter;

    @Field(() => EnumNovelStatusWithAggregatesFilter, {nullable:true})
    status?: EnumNovelStatusWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    authorId?: IntWithAggregatesFilter;

    @Field(() => EnumNovelTranslationStatusWithAggregatesFilter, {nullable:true})
    translationStatus?: EnumNovelTranslationStatusWithAggregatesFilter;

    @Field(() => EnumNovelFormatWithAggregatesFilter, {nullable:true})
    format?: EnumNovelFormatWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    commendableTypeId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    complaintTargetId?: IntWithAggregatesFilter;
}
