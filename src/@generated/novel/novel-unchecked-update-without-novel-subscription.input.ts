import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumNovelStatusFieldUpdateOperationsInput } from '../prisma/enum-novel-status-field-update-operations.input';
import { EnumNovelTranslationStatusFieldUpdateOperationsInput } from '../prisma/enum-novel-translation-status-field-update-operations.input';
import { EnumNovelFormatFieldUpdateOperationsInput } from '../prisma/enum-novel-format-field-update-operations.input';
import { TagUncheckedUpdateManyWithoutNovelsNestedInput } from '../tag/tag-unchecked-update-many-without-novels-nested.input';
import { GenreUncheckedUpdateManyWithoutNovelsNestedInput } from '../genre/genre-unchecked-update-many-without-novels-nested.input';
import { AlternativeTitleUncheckedUpdateManyWithoutNovelNestedInput } from '../alternative-title/alternative-title-unchecked-update-many-without-novel-nested.input';
import { ChapterUncheckedUpdateManyWithoutNovelNestedInput } from '../chapter/chapter-unchecked-update-many-without-novel-nested.input';
import { ReviewUncheckedUpdateManyWithoutNovelNestedInput } from '../review/review-unchecked-update-many-without-novel-nested.input';
import { NovelRatingUncheckedUpdateOneWithoutNovelNestedInput } from '../novel-rating/novel-rating-unchecked-update-one-without-novel-nested.input';
import { UserRatingUncheckedUpdateManyWithoutNovelNestedInput } from '../user-rating/user-rating-unchecked-update-many-without-novel-nested.input';
import { NovelCollectionMappingUncheckedUpdateManyWithoutNovelNestedInput } from '../novel-collection-mapping/novel-collection-mapping-unchecked-update-many-without-novel-nested.input';
import { ContinueReadingUncheckedUpdateManyWithoutNovelNestedInput } from '../continue-reading/continue-reading-unchecked-update-many-without-novel-nested.input';
import { NotificationUncheckedUpdateManyWithoutNovelNestedInput } from '../notification/notification-unchecked-update-many-without-novel-nested.input';

@InputType()
export class NovelUncheckedUpdateWithoutNovelSubscriptionInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    countryId?: IntFieldUpdateOperationsInput;

    @Field(() => EnumNovelStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumNovelStatusFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    authorId?: IntFieldUpdateOperationsInput;

    @Field(() => EnumNovelTranslationStatusFieldUpdateOperationsInput, {nullable:true})
    translationStatus?: EnumNovelTranslationStatusFieldUpdateOperationsInput;

    @Field(() => EnumNovelFormatFieldUpdateOperationsInput, {nullable:true})
    format?: EnumNovelFormatFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    commendableTypeId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    complaintTargetId?: IntFieldUpdateOperationsInput;

    @Field(() => TagUncheckedUpdateManyWithoutNovelsNestedInput, {nullable:true})
    tags?: TagUncheckedUpdateManyWithoutNovelsNestedInput;

    @Field(() => GenreUncheckedUpdateManyWithoutNovelsNestedInput, {nullable:true})
    genres?: GenreUncheckedUpdateManyWithoutNovelsNestedInput;

    @Field(() => AlternativeTitleUncheckedUpdateManyWithoutNovelNestedInput, {nullable:true})
    alternativeTitles?: AlternativeTitleUncheckedUpdateManyWithoutNovelNestedInput;

    @Field(() => ChapterUncheckedUpdateManyWithoutNovelNestedInput, {nullable:true})
    chapters?: ChapterUncheckedUpdateManyWithoutNovelNestedInput;

    @Field(() => ReviewUncheckedUpdateManyWithoutNovelNestedInput, {nullable:true})
    reviews?: ReviewUncheckedUpdateManyWithoutNovelNestedInput;

    @Field(() => NovelRatingUncheckedUpdateOneWithoutNovelNestedInput, {nullable:true})
    novelRating?: NovelRatingUncheckedUpdateOneWithoutNovelNestedInput;

    @Field(() => UserRatingUncheckedUpdateManyWithoutNovelNestedInput, {nullable:true})
    usersRatings?: UserRatingUncheckedUpdateManyWithoutNovelNestedInput;

    @Field(() => NovelCollectionMappingUncheckedUpdateManyWithoutNovelNestedInput, {nullable:true})
    novelCollectionMapping?: NovelCollectionMappingUncheckedUpdateManyWithoutNovelNestedInput;

    @Field(() => ContinueReadingUncheckedUpdateManyWithoutNovelNestedInput, {nullable:true})
    continueReading?: ContinueReadingUncheckedUpdateManyWithoutNovelNestedInput;

    @Field(() => NotificationUncheckedUpdateManyWithoutNovelNestedInput, {nullable:true})
    notifications?: NotificationUncheckedUpdateManyWithoutNovelNestedInput;
}
