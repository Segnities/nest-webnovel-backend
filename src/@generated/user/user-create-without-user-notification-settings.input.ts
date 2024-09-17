import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Provider } from '../prisma/provider.enum';
import { RoleCreateNestedOneWithoutUsersInput } from '../role/role-create-nested-one-without-users.input';
import { TeamCreateNestedOneWithoutUsersInput } from '../team/team-create-nested-one-without-users.input';
import { UserRatingCreateNestedManyWithoutUserInput } from '../user-rating/user-rating-create-nested-many-without-user.input';
import { CommentCreateNestedManyWithoutUserInput } from '../comment/comment-create-nested-many-without-user.input';
import { BookmarkCreateNestedManyWithoutUserInput } from '../bookmark/bookmark-create-nested-many-without-user.input';
import { ReviewCreateNestedManyWithoutUserInput } from '../review/review-create-nested-many-without-user.input';
import { UserCollectionMappingCreateNestedManyWithoutUserInput } from '../user-collection-mapping/user-collection-mapping-create-nested-many-without-user.input';
import { ContinueReadingCreateNestedManyWithoutUserInput } from '../continue-reading/continue-reading-create-nested-many-without-user.input';
import { NewsCreateNestedManyWithoutUserInput } from '../news/news-create-nested-many-without-user.input';
import { UserComplaintCreateNestedManyWithoutUserInput } from '../user-complaint/user-complaint-create-nested-many-without-user.input';
import { ComplaintReasonCreateNestedManyWithoutUserInput } from '../complaint-reason/complaint-reason-create-nested-many-without-user.input';
import { ContentComplaintCreateNestedManyWithoutIssuedByUserInput } from '../content-complaint/content-complaint-create-nested-many-without-issued-by-user.input';
import { ContentComplaintCreateNestedManyWithoutResolvedByUserInput } from '../content-complaint/content-complaint-create-nested-many-without-resolved-by-user.input';
import { BanCreateNestedManyWithoutIssuedByUserInput } from '../ban/ban-create-nested-many-without-issued-by-user.input';
import { BanCreateNestedManyWithoutUserInput } from '../ban/ban-create-nested-many-without-user.input';
import { AppealCreateNestedManyWithoutReviewedByUserInput } from '../appeal/appeal-create-nested-many-without-reviewed-by-user.input';
import { NovelSubscriptionCreateNestedManyWithoutUserInput } from '../novel-subscription/novel-subscription-create-nested-many-without-user.input';
import { NotificationCreateNestedManyWithoutUserInput } from '../notification/notification-create-nested-many-without-user.input';
import { AuthorSubscriptionCreateNestedManyWithoutUserInput } from '../author-subscription/author-subscription-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutUserNotificationSettingsInput {

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Provider, {nullable:false})
    provider!: keyof typeof Provider;

    @Field(() => String, {nullable:false})
    img!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RoleCreateNestedOneWithoutUsersInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutUsersInput;

    @Field(() => TeamCreateNestedOneWithoutUsersInput, {nullable:true})
    team?: TeamCreateNestedOneWithoutUsersInput;

    @Field(() => UserRatingCreateNestedManyWithoutUserInput, {nullable:true})
    usersRatings?: UserRatingCreateNestedManyWithoutUserInput;

    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutUserInput;

    @Field(() => BookmarkCreateNestedManyWithoutUserInput, {nullable:true})
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput;

    @Field(() => ReviewCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: ReviewCreateNestedManyWithoutUserInput;

    @Field(() => UserCollectionMappingCreateNestedManyWithoutUserInput, {nullable:true})
    userCollectionMapping?: UserCollectionMappingCreateNestedManyWithoutUserInput;

    @Field(() => ContinueReadingCreateNestedManyWithoutUserInput, {nullable:true})
    continueReading?: ContinueReadingCreateNestedManyWithoutUserInput;

    @Field(() => NewsCreateNestedManyWithoutUserInput, {nullable:true})
    news?: NewsCreateNestedManyWithoutUserInput;

    @Field(() => UserComplaintCreateNestedManyWithoutUserInput, {nullable:true})
    userComplaints?: UserComplaintCreateNestedManyWithoutUserInput;

    @Field(() => ComplaintReasonCreateNestedManyWithoutUserInput, {nullable:true})
    complaintReasons?: ComplaintReasonCreateNestedManyWithoutUserInput;

    @Field(() => ContentComplaintCreateNestedManyWithoutIssuedByUserInput, {nullable:true})
    issuedContentComplaints?: ContentComplaintCreateNestedManyWithoutIssuedByUserInput;

    @Field(() => ContentComplaintCreateNestedManyWithoutResolvedByUserInput, {nullable:true})
    resolvedContentComplaints?: ContentComplaintCreateNestedManyWithoutResolvedByUserInput;

    @Field(() => BanCreateNestedManyWithoutIssuedByUserInput, {nullable:true})
    issuedBans?: BanCreateNestedManyWithoutIssuedByUserInput;

    @Field(() => BanCreateNestedManyWithoutUserInput, {nullable:true})
    userBans?: BanCreateNestedManyWithoutUserInput;

    @Field(() => AppealCreateNestedManyWithoutReviewedByUserInput, {nullable:true})
    reviewedAppeals?: AppealCreateNestedManyWithoutReviewedByUserInput;

    @Field(() => NovelSubscriptionCreateNestedManyWithoutUserInput, {nullable:true})
    novelsSubscription?: NovelSubscriptionCreateNestedManyWithoutUserInput;

    @Field(() => NotificationCreateNestedManyWithoutUserInput, {nullable:true})
    notifications?: NotificationCreateNestedManyWithoutUserInput;

    @Field(() => AuthorSubscriptionCreateNestedManyWithoutUserInput, {nullable:true})
    authorSubscription?: AuthorSubscriptionCreateNestedManyWithoutUserInput;
}
