import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NovelStatus } from '../prisma/novel-status.enum';
import { NovelTranslationStatus } from '../prisma/novel-translation-status.enum';
import { NovelFormat } from '../prisma/novel-format.enum';
import { TagUncheckedCreateNestedManyWithoutNovelsInput } from '../tag/tag-unchecked-create-nested-many-without-novels.input';
import { GenreUncheckedCreateNestedManyWithoutNovelsInput } from '../genre/genre-unchecked-create-nested-many-without-novels.input';
import { AlternativeTitleUncheckedCreateNestedManyWithoutNovelInput } from '../alternative-title/alternative-title-unchecked-create-nested-many-without-novel.input';
import { ChapterUncheckedCreateNestedManyWithoutNovelInput } from '../chapter/chapter-unchecked-create-nested-many-without-novel.input';
import { NovelRatingUncheckedCreateNestedOneWithoutNovelInput } from '../novel-rating/novel-rating-unchecked-create-nested-one-without-novel.input';
import { UserRatingUncheckedCreateNestedManyWithoutNovelInput } from '../user-rating/user-rating-unchecked-create-nested-many-without-novel.input';
import { NovelCollectionMappingUncheckedCreateNestedManyWithoutNovelInput } from '../novel-collection-mapping/novel-collection-mapping-unchecked-create-nested-many-without-novel.input';
import { ContinueReadingUncheckedCreateNestedManyWithoutNovelInput } from '../continue-reading/continue-reading-unchecked-create-nested-many-without-novel.input';
import { NovelSubscriptionUncheckedCreateNestedManyWithoutNovelInput } from '../novel-subscription/novel-subscription-unchecked-create-nested-many-without-novel.input';
import { NotificationUncheckedCreateNestedManyWithoutNovelInput } from '../notification/notification-unchecked-create-nested-many-without-novel.input';

@InputType()
export class NovelUncheckedCreateWithoutReviewsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    original_title?: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    img!: string;

    @Field(() => Boolean, {nullable:false})
    isAdult!: boolean;

    @Field(() => Int, {nullable:true})
    releaseYear?: number;

    @Field(() => String, {nullable:true})
    coverImg?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    views?: number;

    @Field(() => Int, {nullable:false})
    countryId!: number;

    @Field(() => NovelStatus, {nullable:false})
    status!: keyof typeof NovelStatus;

    @Field(() => Int, {nullable:false})
    authorId!: number;

    @Field(() => NovelTranslationStatus, {nullable:false})
    translationStatus!: keyof typeof NovelTranslationStatus;

    @Field(() => NovelFormat, {nullable:false})
    format!: keyof typeof NovelFormat;

    @Field(() => Int, {nullable:false})
    commendableTypeId!: number;

    @Field(() => Int, {nullable:false})
    complaintTargetId!: number;

    @Field(() => TagUncheckedCreateNestedManyWithoutNovelsInput, {nullable:true})
    tags?: TagUncheckedCreateNestedManyWithoutNovelsInput;

    @Field(() => GenreUncheckedCreateNestedManyWithoutNovelsInput, {nullable:true})
    genres?: GenreUncheckedCreateNestedManyWithoutNovelsInput;

    @Field(() => AlternativeTitleUncheckedCreateNestedManyWithoutNovelInput, {nullable:true})
    alternativeTitles?: AlternativeTitleUncheckedCreateNestedManyWithoutNovelInput;

    @Field(() => ChapterUncheckedCreateNestedManyWithoutNovelInput, {nullable:true})
    chapters?: ChapterUncheckedCreateNestedManyWithoutNovelInput;

    @Field(() => NovelRatingUncheckedCreateNestedOneWithoutNovelInput, {nullable:true})
    novelRating?: NovelRatingUncheckedCreateNestedOneWithoutNovelInput;

    @Field(() => UserRatingUncheckedCreateNestedManyWithoutNovelInput, {nullable:true})
    usersRatings?: UserRatingUncheckedCreateNestedManyWithoutNovelInput;

    @Field(() => NovelCollectionMappingUncheckedCreateNestedManyWithoutNovelInput, {nullable:true})
    novelCollectionMapping?: NovelCollectionMappingUncheckedCreateNestedManyWithoutNovelInput;

    @Field(() => ContinueReadingUncheckedCreateNestedManyWithoutNovelInput, {nullable:true})
    continueReading?: ContinueReadingUncheckedCreateNestedManyWithoutNovelInput;

    @Field(() => NovelSubscriptionUncheckedCreateNestedManyWithoutNovelInput, {nullable:true})
    novelSubscription?: NovelSubscriptionUncheckedCreateNestedManyWithoutNovelInput;

    @Field(() => NotificationUncheckedCreateNestedManyWithoutNovelInput, {nullable:true})
    notifications?: NotificationUncheckedCreateNestedManyWithoutNovelInput;
}
