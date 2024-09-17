import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NovelStatus } from '../prisma/novel-status.enum';
import { NovelTranslationStatus } from '../prisma/novel-translation-status.enum';
import { NovelFormat } from '../prisma/novel-format.enum';
import { CountryCreateNestedOneWithoutNovelsInput } from '../country/country-create-nested-one-without-novels.input';
import { AuthorCreateNestedOneWithoutNovelsInput } from '../author/author-create-nested-one-without-novels.input';
import { CommendableTypeCreateNestedOneWithoutNovelsInput } from '../commendable-type/commendable-type-create-nested-one-without-novels.input';
import { TagCreateNestedManyWithoutNovelsInput } from '../tag/tag-create-nested-many-without-novels.input';
import { GenreCreateNestedManyWithoutNovelsInput } from '../genre/genre-create-nested-many-without-novels.input';
import { AlternativeTitleCreateNestedManyWithoutNovelInput } from '../alternative-title/alternative-title-create-nested-many-without-novel.input';
import { ReviewCreateNestedManyWithoutNovelInput } from '../review/review-create-nested-many-without-novel.input';
import { NovelRatingCreateNestedOneWithoutNovelInput } from '../novel-rating/novel-rating-create-nested-one-without-novel.input';
import { UserRatingCreateNestedManyWithoutNovelInput } from '../user-rating/user-rating-create-nested-many-without-novel.input';
import { NovelCollectionMappingCreateNestedManyWithoutNovelInput } from '../novel-collection-mapping/novel-collection-mapping-create-nested-many-without-novel.input';
import { ComplaintTargetTypeCreateNestedOneWithoutNovelsInput } from '../complaint-target-type/complaint-target-type-create-nested-one-without-novels.input';
import { ContinueReadingCreateNestedManyWithoutNovelInput } from '../continue-reading/continue-reading-create-nested-many-without-novel.input';
import { NovelSubscriptionCreateNestedManyWithoutNovelInput } from '../novel-subscription/novel-subscription-create-nested-many-without-novel.input';
import { NotificationCreateNestedManyWithoutNovelInput } from '../notification/notification-create-nested-many-without-novel.input';

@InputType()
export class NovelCreateWithoutChaptersInput {

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

    @Field(() => NovelStatus, {nullable:false})
    status!: keyof typeof NovelStatus;

    @Field(() => NovelTranslationStatus, {nullable:false})
    translationStatus!: keyof typeof NovelTranslationStatus;

    @Field(() => NovelFormat, {nullable:false})
    format!: keyof typeof NovelFormat;

    @Field(() => CountryCreateNestedOneWithoutNovelsInput, {nullable:false})
    country!: CountryCreateNestedOneWithoutNovelsInput;

    @Field(() => AuthorCreateNestedOneWithoutNovelsInput, {nullable:false})
    author!: AuthorCreateNestedOneWithoutNovelsInput;

    @Field(() => CommendableTypeCreateNestedOneWithoutNovelsInput, {nullable:false})
    commendableType!: CommendableTypeCreateNestedOneWithoutNovelsInput;

    @Field(() => TagCreateNestedManyWithoutNovelsInput, {nullable:true})
    tags?: TagCreateNestedManyWithoutNovelsInput;

    @Field(() => GenreCreateNestedManyWithoutNovelsInput, {nullable:true})
    genres?: GenreCreateNestedManyWithoutNovelsInput;

    @Field(() => AlternativeTitleCreateNestedManyWithoutNovelInput, {nullable:true})
    alternativeTitles?: AlternativeTitleCreateNestedManyWithoutNovelInput;

    @Field(() => ReviewCreateNestedManyWithoutNovelInput, {nullable:true})
    reviews?: ReviewCreateNestedManyWithoutNovelInput;

    @Field(() => NovelRatingCreateNestedOneWithoutNovelInput, {nullable:true})
    novelRating?: NovelRatingCreateNestedOneWithoutNovelInput;

    @Field(() => UserRatingCreateNestedManyWithoutNovelInput, {nullable:true})
    usersRatings?: UserRatingCreateNestedManyWithoutNovelInput;

    @Field(() => NovelCollectionMappingCreateNestedManyWithoutNovelInput, {nullable:true})
    novelCollectionMapping?: NovelCollectionMappingCreateNestedManyWithoutNovelInput;

    @Field(() => ComplaintTargetTypeCreateNestedOneWithoutNovelsInput, {nullable:false})
    complainTargetType!: ComplaintTargetTypeCreateNestedOneWithoutNovelsInput;

    @Field(() => ContinueReadingCreateNestedManyWithoutNovelInput, {nullable:true})
    continueReading?: ContinueReadingCreateNestedManyWithoutNovelInput;

    @Field(() => NovelSubscriptionCreateNestedManyWithoutNovelInput, {nullable:true})
    novelSubscription?: NovelSubscriptionCreateNestedManyWithoutNovelInput;

    @Field(() => NotificationCreateNestedManyWithoutNovelInput, {nullable:true})
    notifications?: NotificationCreateNestedManyWithoutNovelInput;
}
