import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { EnumProviderFilter } from '../prisma/enum-provider-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';
import { TeamNullableRelationFilter } from '../team/team-nullable-relation-filter.input';
import { UserRatingListRelationFilter } from '../user-rating/user-rating-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { BookmarkListRelationFilter } from '../bookmark/bookmark-list-relation-filter.input';
import { ReviewListRelationFilter } from '../review/review-list-relation-filter.input';
import { UserCollectionMappingListRelationFilter } from '../user-collection-mapping/user-collection-mapping-list-relation-filter.input';
import { ContinueReadingListRelationFilter } from '../continue-reading/continue-reading-list-relation-filter.input';
import { NewsListRelationFilter } from '../news/news-list-relation-filter.input';
import { UserComplaintListRelationFilter } from '../user-complaint/user-complaint-list-relation-filter.input';
import { ComplaintReasonListRelationFilter } from '../complaint-reason/complaint-reason-list-relation-filter.input';
import { ContentComplaintListRelationFilter } from '../content-complaint/content-complaint-list-relation-filter.input';
import { BanListRelationFilter } from '../ban/ban-list-relation-filter.input';
import { AppealListRelationFilter } from '../appeal/appeal-list-relation-filter.input';
import { UserNotificationSettingsListRelationFilter } from '../user-notification-settings/user-notification-settings-list-relation-filter.input';
import { NovelSubscriptionListRelationFilter } from '../novel-subscription/novel-subscription-list-relation-filter.input';
import { NotificationListRelationFilter } from '../notification/notification-list-relation-filter.input';
import { AuthorSubscriptionListRelationFilter } from '../author-subscription/author-subscription-list-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => EnumProviderFilter, {nullable:true})
    provider?: EnumProviderFilter;

    @Field(() => StringFilter, {nullable:true})
    img?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    roleId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    teamId?: IntNullableFilter;

    @Field(() => RoleRelationFilter, {nullable:true})
    role?: RoleRelationFilter;

    @Field(() => TeamNullableRelationFilter, {nullable:true})
    team?: TeamNullableRelationFilter;

    @Field(() => UserRatingListRelationFilter, {nullable:true})
    usersRatings?: UserRatingListRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: CommentListRelationFilter;

    @Field(() => BookmarkListRelationFilter, {nullable:true})
    bookmarks?: BookmarkListRelationFilter;

    @Field(() => ReviewListRelationFilter, {nullable:true})
    reviews?: ReviewListRelationFilter;

    @Field(() => UserCollectionMappingListRelationFilter, {nullable:true})
    userCollectionMapping?: UserCollectionMappingListRelationFilter;

    @Field(() => ContinueReadingListRelationFilter, {nullable:true})
    continueReading?: ContinueReadingListRelationFilter;

    @Field(() => NewsListRelationFilter, {nullable:true})
    news?: NewsListRelationFilter;

    @Field(() => UserComplaintListRelationFilter, {nullable:true})
    userComplaints?: UserComplaintListRelationFilter;

    @Field(() => ComplaintReasonListRelationFilter, {nullable:true})
    complaintReasons?: ComplaintReasonListRelationFilter;

    @Field(() => ContentComplaintListRelationFilter, {nullable:true})
    issuedContentComplaints?: ContentComplaintListRelationFilter;

    @Field(() => ContentComplaintListRelationFilter, {nullable:true})
    resolvedContentComplaints?: ContentComplaintListRelationFilter;

    @Field(() => BanListRelationFilter, {nullable:true})
    issuedBans?: BanListRelationFilter;

    @Field(() => BanListRelationFilter, {nullable:true})
    userBans?: BanListRelationFilter;

    @Field(() => AppealListRelationFilter, {nullable:true})
    reviewedAppeals?: AppealListRelationFilter;

    @Field(() => UserNotificationSettingsListRelationFilter, {nullable:true})
    userNotificationSettings?: UserNotificationSettingsListRelationFilter;

    @Field(() => NovelSubscriptionListRelationFilter, {nullable:true})
    novelsSubscription?: NovelSubscriptionListRelationFilter;

    @Field(() => NotificationListRelationFilter, {nullable:true})
    notifications?: NotificationListRelationFilter;

    @Field(() => AuthorSubscriptionListRelationFilter, {nullable:true})
    authorSubscription?: AuthorSubscriptionListRelationFilter;
}
