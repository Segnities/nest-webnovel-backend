import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CountryOrderByWithRelationInput } from '../country/country-order-by-with-relation.input';
import { AuthorOrderByWithRelationInput } from '../author/author-order-by-with-relation.input';
import { CommendableTypeOrderByWithRelationInput } from '../commendable-type/commendable-type-order-by-with-relation.input';
import { TagOrderByRelationAggregateInput } from '../tag/tag-order-by-relation-aggregate.input';
import { GenreOrderByRelationAggregateInput } from '../genre/genre-order-by-relation-aggregate.input';
import { AlternativeTitleOrderByRelationAggregateInput } from '../alternative-title/alternative-title-order-by-relation-aggregate.input';
import { ChapterOrderByRelationAggregateInput } from '../chapter/chapter-order-by-relation-aggregate.input';
import { ReviewOrderByRelationAggregateInput } from '../review/review-order-by-relation-aggregate.input';
import { NovelRatingOrderByWithRelationInput } from '../novel-rating/novel-rating-order-by-with-relation.input';
import { UserRatingOrderByRelationAggregateInput } from '../user-rating/user-rating-order-by-relation-aggregate.input';
import { NovelCollectionMappingOrderByRelationAggregateInput } from '../novel-collection-mapping/novel-collection-mapping-order-by-relation-aggregate.input';
import { ComplaintTargetTypeOrderByWithRelationInput } from '../complaint-target-type/complaint-target-type-order-by-with-relation.input';
import { ContinueReadingOrderByRelationAggregateInput } from '../continue-reading/continue-reading-order-by-relation-aggregate.input';
import { NovelSubscriptionOrderByRelationAggregateInput } from '../novel-subscription/novel-subscription-order-by-relation-aggregate.input';
import { NotificationOrderByRelationAggregateInput } from '../notification/notification-order-by-relation-aggregate.input';

@InputType()
export class NovelOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    original_title?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    img?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isAdult?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    releaseYear?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    coverImg?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    views?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    translationStatus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    format?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    commendableTypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    complaintTargetId?: keyof typeof SortOrder;

    @Field(() => CountryOrderByWithRelationInput, {nullable:true})
    country?: CountryOrderByWithRelationInput;

    @Field(() => AuthorOrderByWithRelationInput, {nullable:true})
    author?: AuthorOrderByWithRelationInput;

    @Field(() => CommendableTypeOrderByWithRelationInput, {nullable:true})
    commendableType?: CommendableTypeOrderByWithRelationInput;

    @Field(() => TagOrderByRelationAggregateInput, {nullable:true})
    tags?: TagOrderByRelationAggregateInput;

    @Field(() => GenreOrderByRelationAggregateInput, {nullable:true})
    genres?: GenreOrderByRelationAggregateInput;

    @Field(() => AlternativeTitleOrderByRelationAggregateInput, {nullable:true})
    alternativeTitles?: AlternativeTitleOrderByRelationAggregateInput;

    @Field(() => ChapterOrderByRelationAggregateInput, {nullable:true})
    chapters?: ChapterOrderByRelationAggregateInput;

    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    reviews?: ReviewOrderByRelationAggregateInput;

    @Field(() => NovelRatingOrderByWithRelationInput, {nullable:true})
    novelRating?: NovelRatingOrderByWithRelationInput;

    @Field(() => UserRatingOrderByRelationAggregateInput, {nullable:true})
    usersRatings?: UserRatingOrderByRelationAggregateInput;

    @Field(() => NovelCollectionMappingOrderByRelationAggregateInput, {nullable:true})
    novelCollectionMapping?: NovelCollectionMappingOrderByRelationAggregateInput;

    @Field(() => ComplaintTargetTypeOrderByWithRelationInput, {nullable:true})
    complainTargetType?: ComplaintTargetTypeOrderByWithRelationInput;

    @Field(() => ContinueReadingOrderByRelationAggregateInput, {nullable:true})
    continueReading?: ContinueReadingOrderByRelationAggregateInput;

    @Field(() => NovelSubscriptionOrderByRelationAggregateInput, {nullable:true})
    novelSubscription?: NovelSubscriptionOrderByRelationAggregateInput;

    @Field(() => NotificationOrderByRelationAggregateInput, {nullable:true})
    notifications?: NotificationOrderByRelationAggregateInput;
}
