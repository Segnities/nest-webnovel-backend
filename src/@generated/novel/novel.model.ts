import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NovelStatus } from '../prisma/novel-status.enum';
import { NovelTranslationStatus } from '../prisma/novel-translation-status.enum';
import { NovelFormat } from '../prisma/novel-format.enum';
import { Country } from '../country/country.model';
import { Author } from '../author/author.model';
import { CommendableType } from '../commendable-type/commendable-type.model';
import { Tag } from '../tag/tag.model';
import { Genre } from '../genre/genre.model';
import { AlternativeTitle } from '../alternative-title/alternative-title.model';
import { Chapter } from '../chapter/chapter.model';
import { Review } from '../review/review.model';
import { NovelRating } from '../novel-rating/novel-rating.model';
import { UserRating } from '../user-rating/user-rating.model';
import { NovelCollectionMapping } from '../novel-collection-mapping/novel-collection-mapping.model';
import { ComplaintTargetType } from '../complaint-target-type/complaint-target-type.model';
import { ContinueReading } from '../continue-reading/continue-reading.model';
import { NovelSubscription } from '../novel-subscription/novel-subscription.model';
import { Notification } from '../notification/notification.model';
import { NovelCount } from './novel-count.output';

@ObjectType()
export class Novel {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    original_title!: string | null;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    img!: string;

    @Field(() => Boolean, {nullable:false})
    isAdult!: boolean;

    @Field(() => Int, {nullable:true})
    releaseYear!: number | null;

    @Field(() => String, {nullable:true})
    coverImg!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false,defaultValue:0})
    views!: number;

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

    @Field(() => Country, {nullable:false})
    country?: Country;

    @Field(() => Author, {nullable:false})
    author?: Author;

    @Field(() => CommendableType, {nullable:false})
    commendableType?: CommendableType;

    @Field(() => [Tag], {nullable:true})
    tags?: Array<Tag>;

    @Field(() => [Genre], {nullable:true})
    genres?: Array<Genre>;

    @Field(() => [AlternativeTitle], {nullable:true})
    alternativeTitles?: Array<AlternativeTitle>;

    @Field(() => [Chapter], {nullable:true})
    chapters?: Array<Chapter>;

    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;

    @Field(() => NovelRating, {nullable:true})
    novelRating?: NovelRating | null;

    @Field(() => [UserRating], {nullable:true})
    usersRatings?: Array<UserRating>;

    @Field(() => [NovelCollectionMapping], {nullable:true})
    novelCollectionMapping?: Array<NovelCollectionMapping>;

    @Field(() => ComplaintTargetType, {nullable:false})
    complainTargetType?: ComplaintTargetType;

    @Field(() => [ContinueReading], {nullable:true})
    continueReading?: Array<ContinueReading>;

    @Field(() => [NovelSubscription], {nullable:true})
    novelSubscription?: Array<NovelSubscription>;

    @Field(() => [Notification], {nullable:true})
    notifications?: Array<Notification>;

    @Field(() => NovelCount, {nullable:false})
    _count?: NovelCount;
}
