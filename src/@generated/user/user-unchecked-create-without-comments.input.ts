import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Provider } from '../prisma/provider.enum';
import { UserRatingUncheckedCreateNestedManyWithoutUserInput } from '../user-rating/user-rating-unchecked-create-nested-many-without-user.input';
import { BookmarkUncheckedCreateNestedManyWithoutUserInput } from '../bookmark/bookmark-unchecked-create-nested-many-without-user.input';
import { ReviewUncheckedCreateNestedManyWithoutUserInput } from '../review/review-unchecked-create-nested-many-without-user.input';
import { UserCollectionMappingUncheckedCreateNestedManyWithoutUserInput } from '../user-collection-mapping/user-collection-mapping-unchecked-create-nested-many-without-user.input';
import { ContinueReadingUncheckedCreateNestedManyWithoutUserInput } from '../continue-reading/continue-reading-unchecked-create-nested-many-without-user.input';
import { NewsUncheckedCreateNestedManyWithoutUserInput } from '../news/news-unchecked-create-nested-many-without-user.input';
import { UserComplaintUncheckedCreateNestedManyWithoutUserInput } from '../user-complaint/user-complaint-unchecked-create-nested-many-without-user.input';
import { ComplaintReasonUncheckedCreateNestedManyWithoutUserInput } from '../complaint-reason/complaint-reason-unchecked-create-nested-many-without-user.input';
import { ContentComplaintUncheckedCreateNestedManyWithoutIssuedByUserInput } from '../content-complaint/content-complaint-unchecked-create-nested-many-without-issued-by-user.input';
import { ContentComplaintUncheckedCreateNestedManyWithoutResolvedByUserInput } from '../content-complaint/content-complaint-unchecked-create-nested-many-without-resolved-by-user.input';
import { BanUncheckedCreateNestedManyWithoutIssuedByUserInput } from '../ban/ban-unchecked-create-nested-many-without-issued-by-user.input';
import { BanUncheckedCreateNestedManyWithoutUserInput } from '../ban/ban-unchecked-create-nested-many-without-user.input';
import { AppealUncheckedCreateNestedManyWithoutReviewedByUserInput } from '../appeal/appeal-unchecked-create-nested-many-without-reviewed-by-user.input';
import { UserNotificationSettingsUncheckedCreateNestedManyWithoutUserInput } from '../user-notification-settings/user-notification-settings-unchecked-create-nested-many-without-user.input';
import { NovelSubscriptionUncheckedCreateNestedManyWithoutUserInput } from '../novel-subscription/novel-subscription-unchecked-create-nested-many-without-user.input';
import { NotificationUncheckedCreateNestedManyWithoutUserInput } from '../notification/notification-unchecked-create-nested-many-without-user.input';
import { AuthorSubscriptionUncheckedCreateNestedManyWithoutUserInput } from '../author-subscription/author-subscription-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutCommentsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Int, {nullable:true})
    teamId?: number;

    @Field(() => UserRatingUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    usersRatings?: UserRatingUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => BookmarkUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => UserCollectionMappingUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userCollectionMapping?: UserCollectionMappingUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ContinueReadingUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    continueReading?: ContinueReadingUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => NewsUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    news?: NewsUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => UserComplaintUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userComplaints?: UserComplaintUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ComplaintReasonUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    complaintReasons?: ComplaintReasonUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ContentComplaintUncheckedCreateNestedManyWithoutIssuedByUserInput, {nullable:true})
    issuedContentComplaints?: ContentComplaintUncheckedCreateNestedManyWithoutIssuedByUserInput;

    @Field(() => ContentComplaintUncheckedCreateNestedManyWithoutResolvedByUserInput, {nullable:true})
    resolvedContentComplaints?: ContentComplaintUncheckedCreateNestedManyWithoutResolvedByUserInput;

    @Field(() => BanUncheckedCreateNestedManyWithoutIssuedByUserInput, {nullable:true})
    issuedBans?: BanUncheckedCreateNestedManyWithoutIssuedByUserInput;

    @Field(() => BanUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userBans?: BanUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => AppealUncheckedCreateNestedManyWithoutReviewedByUserInput, {nullable:true})
    reviewedAppeals?: AppealUncheckedCreateNestedManyWithoutReviewedByUserInput;

    @Field(() => UserNotificationSettingsUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userNotificationSettings?: UserNotificationSettingsUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => NovelSubscriptionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    novelsSubscription?: NovelSubscriptionUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => NotificationUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => AuthorSubscriptionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    authorSubscription?: AuthorSubscriptionUncheckedCreateNestedManyWithoutUserInput;
}
