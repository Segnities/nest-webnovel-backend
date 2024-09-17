import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RoleOrderByWithRelationInput } from '../role/role-order-by-with-relation.input';
import { TeamOrderByWithRelationInput } from '../team/team-order-by-with-relation.input';
import { UserRatingOrderByRelationAggregateInput } from '../user-rating/user-rating-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { BookmarkOrderByRelationAggregateInput } from '../bookmark/bookmark-order-by-relation-aggregate.input';
import { ReviewOrderByRelationAggregateInput } from '../review/review-order-by-relation-aggregate.input';
import { UserCollectionMappingOrderByRelationAggregateInput } from '../user-collection-mapping/user-collection-mapping-order-by-relation-aggregate.input';
import { ContinueReadingOrderByRelationAggregateInput } from '../continue-reading/continue-reading-order-by-relation-aggregate.input';
import { NewsOrderByRelationAggregateInput } from '../news/news-order-by-relation-aggregate.input';
import { UserComplaintOrderByRelationAggregateInput } from '../user-complaint/user-complaint-order-by-relation-aggregate.input';
import { ComplaintReasonOrderByRelationAggregateInput } from '../complaint-reason/complaint-reason-order-by-relation-aggregate.input';
import { ContentComplaintOrderByRelationAggregateInput } from '../content-complaint/content-complaint-order-by-relation-aggregate.input';
import { BanOrderByRelationAggregateInput } from '../ban/ban-order-by-relation-aggregate.input';
import { AppealOrderByRelationAggregateInput } from '../appeal/appeal-order-by-relation-aggregate.input';
import { UserNotificationSettingsOrderByRelationAggregateInput } from '../user-notification-settings/user-notification-settings-order-by-relation-aggregate.input';
import { NovelSubscriptionOrderByRelationAggregateInput } from '../novel-subscription/novel-subscription-order-by-relation-aggregate.input';
import { NotificationOrderByRelationAggregateInput } from '../notification/notification-order-by-relation-aggregate.input';
import { AuthorSubscriptionOrderByRelationAggregateInput } from '../author-subscription/author-subscription-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    provider?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    img?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    roleId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    teamId?: SortOrderInput;

    @Field(() => RoleOrderByWithRelationInput, {nullable:true})
    role?: RoleOrderByWithRelationInput;

    @Field(() => TeamOrderByWithRelationInput, {nullable:true})
    team?: TeamOrderByWithRelationInput;

    @Field(() => UserRatingOrderByRelationAggregateInput, {nullable:true})
    usersRatings?: UserRatingOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: CommentOrderByRelationAggregateInput;

    @Field(() => BookmarkOrderByRelationAggregateInput, {nullable:true})
    bookmarks?: BookmarkOrderByRelationAggregateInput;

    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    reviews?: ReviewOrderByRelationAggregateInput;

    @Field(() => UserCollectionMappingOrderByRelationAggregateInput, {nullable:true})
    userCollectionMapping?: UserCollectionMappingOrderByRelationAggregateInput;

    @Field(() => ContinueReadingOrderByRelationAggregateInput, {nullable:true})
    continueReading?: ContinueReadingOrderByRelationAggregateInput;

    @Field(() => NewsOrderByRelationAggregateInput, {nullable:true})
    news?: NewsOrderByRelationAggregateInput;

    @Field(() => UserComplaintOrderByRelationAggregateInput, {nullable:true})
    userComplaints?: UserComplaintOrderByRelationAggregateInput;

    @Field(() => ComplaintReasonOrderByRelationAggregateInput, {nullable:true})
    complaintReasons?: ComplaintReasonOrderByRelationAggregateInput;

    @Field(() => ContentComplaintOrderByRelationAggregateInput, {nullable:true})
    issuedContentComplaints?: ContentComplaintOrderByRelationAggregateInput;

    @Field(() => ContentComplaintOrderByRelationAggregateInput, {nullable:true})
    resolvedContentComplaints?: ContentComplaintOrderByRelationAggregateInput;

    @Field(() => BanOrderByRelationAggregateInput, {nullable:true})
    issuedBans?: BanOrderByRelationAggregateInput;

    @Field(() => BanOrderByRelationAggregateInput, {nullable:true})
    userBans?: BanOrderByRelationAggregateInput;

    @Field(() => AppealOrderByRelationAggregateInput, {nullable:true})
    reviewedAppeals?: AppealOrderByRelationAggregateInput;

    @Field(() => UserNotificationSettingsOrderByRelationAggregateInput, {nullable:true})
    userNotificationSettings?: UserNotificationSettingsOrderByRelationAggregateInput;

    @Field(() => NovelSubscriptionOrderByRelationAggregateInput, {nullable:true})
    novelsSubscription?: NovelSubscriptionOrderByRelationAggregateInput;

    @Field(() => NotificationOrderByRelationAggregateInput, {nullable:true})
    notifications?: NotificationOrderByRelationAggregateInput;

    @Field(() => AuthorSubscriptionOrderByRelationAggregateInput, {nullable:true})
    authorSubscription?: AuthorSubscriptionOrderByRelationAggregateInput;
}
