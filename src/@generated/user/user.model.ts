import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Provider } from '../prisma/provider.enum';
import { Int } from '@nestjs/graphql';
import { Role } from '../role/role.model';
import { Team } from '../team/team.model';
import { UserRating } from '../user-rating/user-rating.model';
import { Comment } from '../comment/comment.model';
import { Bookmark } from '../bookmark/bookmark.model';
import { Review } from '../review/review.model';
import { UserCollectionMapping } from '../user-collection-mapping/user-collection-mapping.model';
import { ContinueReading } from '../continue-reading/continue-reading.model';
import { News } from '../news/news.model';
import { UserComplaint } from '../user-complaint/user-complaint.model';
import { ComplaintReason } from '../complaint-reason/complaint-reason.model';
import { ContentComplaint } from '../content-complaint/content-complaint.model';
import { Ban } from '../ban/ban.model';
import { Appeal } from '../appeal/appeal.model';
import { UserNotificationSettings } from '../user-notification-settings/user-notification-settings.model';
import { NovelSubscription } from '../novel-subscription/novel-subscription.model';
import { Notification } from '../notification/notification.model';
import { AuthorSubscription } from '../author-subscription/author-subscription.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Provider, {nullable:false})
    provider!: keyof typeof Provider;

    @Field(() => String, {nullable:false})
    img!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Int, {nullable:true})
    teamId!: number | null;

    @Field(() => Role, {nullable:false})
    role?: Role;

    @Field(() => Team, {nullable:true})
    team?: Team | null;

    @Field(() => [UserRating], {nullable:true})
    usersRatings?: Array<UserRating>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [Bookmark], {nullable:true})
    bookmarks?: Array<Bookmark>;

    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;

    @Field(() => [UserCollectionMapping], {nullable:true})
    userCollectionMapping?: Array<UserCollectionMapping>;

    @Field(() => [ContinueReading], {nullable:true})
    continueReading?: Array<ContinueReading>;

    @Field(() => [News], {nullable:true})
    news?: Array<News>;

    @Field(() => [UserComplaint], {nullable:true})
    userComplaints?: Array<UserComplaint>;

    @Field(() => [ComplaintReason], {nullable:true})
    complaintReasons?: Array<ComplaintReason>;

    @Field(() => [ContentComplaint], {nullable:true})
    issuedContentComplaints?: Array<ContentComplaint>;

    @Field(() => [ContentComplaint], {nullable:true})
    resolvedContentComplaints?: Array<ContentComplaint>;

    @Field(() => [Ban], {nullable:true})
    issuedBans?: Array<Ban>;

    @Field(() => [Ban], {nullable:true})
    userBans?: Array<Ban>;

    @Field(() => [Appeal], {nullable:true})
    reviewedAppeals?: Array<Appeal>;

    @Field(() => [UserNotificationSettings], {nullable:true})
    userNotificationSettings?: Array<UserNotificationSettings>;

    @Field(() => [NovelSubscription], {nullable:true})
    novelsSubscription?: Array<NovelSubscription>;

    @Field(() => [Notification], {nullable:true})
    notifications?: Array<Notification>;

    @Field(() => [AuthorSubscription], {nullable:true})
    authorSubscription?: Array<AuthorSubscription>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
