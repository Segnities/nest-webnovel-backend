import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumNovelStatusFilter } from '../prisma/enum-novel-status-filter.input';
import { EnumNovelTranslationStatusFilter } from '../prisma/enum-novel-translation-status-filter.input';
import { EnumNovelFormatFilter } from '../prisma/enum-novel-format-filter.input';

@InputType()
export class NovelScalarWhereInput {

    @Field(() => [NovelScalarWhereInput], {nullable:true})
    AND?: Array<NovelScalarWhereInput>;

    @Field(() => [NovelScalarWhereInput], {nullable:true})
    OR?: Array<NovelScalarWhereInput>;

    @Field(() => [NovelScalarWhereInput], {nullable:true})
    NOT?: Array<NovelScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    original_title?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    img?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isAdult?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    releaseYear?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    coverImg?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    views?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    countryId?: IntFilter;

    @Field(() => EnumNovelStatusFilter, {nullable:true})
    status?: EnumNovelStatusFilter;

    @Field(() => IntFilter, {nullable:true})
    authorId?: IntFilter;

    @Field(() => EnumNovelTranslationStatusFilter, {nullable:true})
    translationStatus?: EnumNovelTranslationStatusFilter;

    @Field(() => EnumNovelFormatFilter, {nullable:true})
    format?: EnumNovelFormatFilter;

    @Field(() => IntFilter, {nullable:true})
    commendableTypeId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    complaintTargetId?: IntFilter;
}
