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
import { CountryRelationFilter } from '../country/country-relation-filter.input';
import { AuthorRelationFilter } from '../author/author-relation-filter.input';
import { CommendableTypeRelationFilter } from '../commendable-type/commendable-type-relation-filter.input';
import { TagListRelationFilter } from '../tag/tag-list-relation-filter.input';
import { GenreListRelationFilter } from '../genre/genre-list-relation-filter.input';
import { AlternativeTitleListRelationFilter } from '../alternative-title/alternative-title-list-relation-filter.input';
import { ChapterListRelationFilter } from '../chapter/chapter-list-relation-filter.input';
import { ReviewListRelationFilter } from '../review/review-list-relation-filter.input';
import { NovelRatingNullableRelationFilter } from '../novel-rating/novel-rating-nullable-relation-filter.input';
import { UserRatingListRelationFilter } from '../user-rating/user-rating-list-relation-filter.input';
import { NovelCollectionMappingListRelationFilter } from '../novel-collection-mapping/novel-collection-mapping-list-relation-filter.input';
import { ComplaintTargetTypeRelationFilter } from '../complaint-target-type/complaint-target-type-relation-filter.input';
import { ContinueReadingListRelationFilter } from '../continue-reading/continue-reading-list-relation-filter.input';
import { NovelSubscriptionListRelationFilter } from '../novel-subscription/novel-subscription-list-relation-filter.input';
import { NotificationListRelationFilter } from '../notification/notification-list-relation-filter.input';

@InputType()
export class NovelWhereInput {

    @Field(() => [NovelWhereInput], {nullable:true})
    AND?: Array<NovelWhereInput>;

    @Field(() => [NovelWhereInput], {nullable:true})
    OR?: Array<NovelWhereInput>;

    @Field(() => [NovelWhereInput], {nullable:true})
    NOT?: Array<NovelWhereInput>;

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

    @Field(() => CountryRelationFilter, {nullable:true})
    country?: CountryRelationFilter;

    @Field(() => AuthorRelationFilter, {nullable:true})
    author?: AuthorRelationFilter;

    @Field(() => CommendableTypeRelationFilter, {nullable:true})
    commendableType?: CommendableTypeRelationFilter;

    @Field(() => TagListRelationFilter, {nullable:true})
    tags?: TagListRelationFilter;

    @Field(() => GenreListRelationFilter, {nullable:true})
    genres?: GenreListRelationFilter;

    @Field(() => AlternativeTitleListRelationFilter, {nullable:true})
    alternativeTitles?: AlternativeTitleListRelationFilter;

    @Field(() => ChapterListRelationFilter, {nullable:true})
    chapters?: ChapterListRelationFilter;

    @Field(() => ReviewListRelationFilter, {nullable:true})
    reviews?: ReviewListRelationFilter;

    @Field(() => NovelRatingNullableRelationFilter, {nullable:true})
    novelRating?: NovelRatingNullableRelationFilter;

    @Field(() => UserRatingListRelationFilter, {nullable:true})
    usersRatings?: UserRatingListRelationFilter;

    @Field(() => NovelCollectionMappingListRelationFilter, {nullable:true})
    novelCollectionMapping?: NovelCollectionMappingListRelationFilter;

    @Field(() => ComplaintTargetTypeRelationFilter, {nullable:true})
    complainTargetType?: ComplaintTargetTypeRelationFilter;

    @Field(() => ContinueReadingListRelationFilter, {nullable:true})
    continueReading?: ContinueReadingListRelationFilter;

    @Field(() => NovelSubscriptionListRelationFilter, {nullable:true})
    novelSubscription?: NovelSubscriptionListRelationFilter;

    @Field(() => NotificationListRelationFilter, {nullable:true})
    notifications?: NotificationListRelationFilter;
}
