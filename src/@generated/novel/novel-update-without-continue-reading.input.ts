import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumNovelStatusFieldUpdateOperationsInput } from '../prisma/enum-novel-status-field-update-operations.input';
import { EnumNovelTranslationStatusFieldUpdateOperationsInput } from '../prisma/enum-novel-translation-status-field-update-operations.input';
import { EnumNovelFormatFieldUpdateOperationsInput } from '../prisma/enum-novel-format-field-update-operations.input';
import { CountryUpdateOneRequiredWithoutNovelsNestedInput } from '../country/country-update-one-required-without-novels-nested.input';
import { AuthorUpdateOneRequiredWithoutNovelsNestedInput } from '../author/author-update-one-required-without-novels-nested.input';
import { CommendableTypeUpdateOneRequiredWithoutNovelsNestedInput } from '../commendable-type/commendable-type-update-one-required-without-novels-nested.input';
import { TagUpdateManyWithoutNovelsNestedInput } from '../tag/tag-update-many-without-novels-nested.input';
import { GenreUpdateManyWithoutNovelsNestedInput } from '../genre/genre-update-many-without-novels-nested.input';
import { AlternativeTitleUpdateManyWithoutNovelNestedInput } from '../alternative-title/alternative-title-update-many-without-novel-nested.input';
import { ChapterUpdateManyWithoutNovelNestedInput } from '../chapter/chapter-update-many-without-novel-nested.input';
import { ReviewUpdateManyWithoutNovelNestedInput } from '../review/review-update-many-without-novel-nested.input';
import { NovelRatingUpdateOneWithoutNovelNestedInput } from '../novel-rating/novel-rating-update-one-without-novel-nested.input';
import { UserRatingUpdateManyWithoutNovelNestedInput } from '../user-rating/user-rating-update-many-without-novel-nested.input';
import { NovelCollectionMappingUpdateManyWithoutNovelNestedInput } from '../novel-collection-mapping/novel-collection-mapping-update-many-without-novel-nested.input';
import { ComplaintTargetTypeUpdateOneRequiredWithoutNovelsNestedInput } from '../complaint-target-type/complaint-target-type-update-one-required-without-novels-nested.input';
import { NovelSubscriptionUpdateManyWithoutNovelNestedInput } from '../novel-subscription/novel-subscription-update-many-without-novel-nested.input';
import { NotificationUpdateManyWithoutNovelNestedInput } from '../notification/notification-update-many-without-novel-nested.input';

@InputType()
export class NovelUpdateWithoutContinueReadingInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    original_title?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    img?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAdult?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    releaseYear?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    coverImg?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    views?: IntFieldUpdateOperationsInput;

    @Field(() => EnumNovelStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumNovelStatusFieldUpdateOperationsInput;

    @Field(() => EnumNovelTranslationStatusFieldUpdateOperationsInput, {nullable:true})
    translationStatus?: EnumNovelTranslationStatusFieldUpdateOperationsInput;

    @Field(() => EnumNovelFormatFieldUpdateOperationsInput, {nullable:true})
    format?: EnumNovelFormatFieldUpdateOperationsInput;

    @Field(() => CountryUpdateOneRequiredWithoutNovelsNestedInput, {nullable:true})
    country?: CountryUpdateOneRequiredWithoutNovelsNestedInput;

    @Field(() => AuthorUpdateOneRequiredWithoutNovelsNestedInput, {nullable:true})
    author?: AuthorUpdateOneRequiredWithoutNovelsNestedInput;

    @Field(() => CommendableTypeUpdateOneRequiredWithoutNovelsNestedInput, {nullable:true})
    commendableType?: CommendableTypeUpdateOneRequiredWithoutNovelsNestedInput;

    @Field(() => TagUpdateManyWithoutNovelsNestedInput, {nullable:true})
    tags?: TagUpdateManyWithoutNovelsNestedInput;

    @Field(() => GenreUpdateManyWithoutNovelsNestedInput, {nullable:true})
    genres?: GenreUpdateManyWithoutNovelsNestedInput;

    @Field(() => AlternativeTitleUpdateManyWithoutNovelNestedInput, {nullable:true})
    alternativeTitles?: AlternativeTitleUpdateManyWithoutNovelNestedInput;

    @Field(() => ChapterUpdateManyWithoutNovelNestedInput, {nullable:true})
    chapters?: ChapterUpdateManyWithoutNovelNestedInput;

    @Field(() => ReviewUpdateManyWithoutNovelNestedInput, {nullable:true})
    reviews?: ReviewUpdateManyWithoutNovelNestedInput;

    @Field(() => NovelRatingUpdateOneWithoutNovelNestedInput, {nullable:true})
    novelRating?: NovelRatingUpdateOneWithoutNovelNestedInput;

    @Field(() => UserRatingUpdateManyWithoutNovelNestedInput, {nullable:true})
    usersRatings?: UserRatingUpdateManyWithoutNovelNestedInput;

    @Field(() => NovelCollectionMappingUpdateManyWithoutNovelNestedInput, {nullable:true})
    novelCollectionMapping?: NovelCollectionMappingUpdateManyWithoutNovelNestedInput;

    @Field(() => ComplaintTargetTypeUpdateOneRequiredWithoutNovelsNestedInput, {nullable:true})
    complainTargetType?: ComplaintTargetTypeUpdateOneRequiredWithoutNovelsNestedInput;

    @Field(() => NovelSubscriptionUpdateManyWithoutNovelNestedInput, {nullable:true})
    novelSubscription?: NovelSubscriptionUpdateManyWithoutNovelNestedInput;

    @Field(() => NotificationUpdateManyWithoutNovelNestedInput, {nullable:true})
    notifications?: NotificationUpdateManyWithoutNovelNestedInput;
}
