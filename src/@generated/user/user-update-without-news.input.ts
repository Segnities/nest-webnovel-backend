import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumProviderFieldUpdateOperationsInput } from '../prisma/enum-provider-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RoleUpdateOneRequiredWithoutUsersNestedInput } from '../role/role-update-one-required-without-users-nested.input';
import { TeamUpdateOneWithoutUsersNestedInput } from '../team/team-update-one-without-users-nested.input';
import { UserRatingUpdateManyWithoutUserNestedInput } from '../user-rating/user-rating-update-many-without-user-nested.input';
import { CommentUpdateManyWithoutUserNestedInput } from '../comment/comment-update-many-without-user-nested.input';
import { BookmarkUpdateManyWithoutUserNestedInput } from '../bookmark/bookmark-update-many-without-user-nested.input';
import { ReviewUpdateManyWithoutUserNestedInput } from '../review/review-update-many-without-user-nested.input';
import { UserCollectionMappingUpdateManyWithoutUserNestedInput } from '../user-collection-mapping/user-collection-mapping-update-many-without-user-nested.input';
import { ContinueReadingUpdateManyWithoutUserNestedInput } from '../continue-reading/continue-reading-update-many-without-user-nested.input';
import { UserComplaintUpdateManyWithoutUserNestedInput } from '../user-complaint/user-complaint-update-many-without-user-nested.input';
import { ComplaintReasonUpdateManyWithoutUserNestedInput } from '../complaint-reason/complaint-reason-update-many-without-user-nested.input';
import { ContentComplaintUpdateManyWithoutIssuedByUserNestedInput } from '../content-complaint/content-complaint-update-many-without-issued-by-user-nested.input';
import { ContentComplaintUpdateManyWithoutResolvedByUserNestedInput } from '../content-complaint/content-complaint-update-many-without-resolved-by-user-nested.input';
import { BanUpdateManyWithoutIssuedByUserNestedInput } from '../ban/ban-update-many-without-issued-by-user-nested.input';
import { BanUpdateManyWithoutUserNestedInput } from '../ban/ban-update-many-without-user-nested.input';
import { AppealUpdateManyWithoutReviewedByUserNestedInput } from '../appeal/appeal-update-many-without-reviewed-by-user-nested.input';
import { UserNotificationSettingsUpdateManyWithoutUserNestedInput } from '../user-notification-settings/user-notification-settings-update-many-without-user-nested.input';
import { NovelSubscriptionUpdateManyWithoutUserNestedInput } from '../novel-subscription/novel-subscription-update-many-without-user-nested.input';
import { NotificationUpdateManyWithoutUserNestedInput } from '../notification/notification-update-many-without-user-nested.input';
import { AuthorSubscriptionUpdateManyWithoutUserNestedInput } from '../author-subscription/author-subscription-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutNewsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => EnumProviderFieldUpdateOperationsInput, {nullable:true})
    provider?: EnumProviderFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    img?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => RoleUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput;

    @Field(() => TeamUpdateOneWithoutUsersNestedInput, {nullable:true})
    team?: TeamUpdateOneWithoutUsersNestedInput;

    @Field(() => UserRatingUpdateManyWithoutUserNestedInput, {nullable:true})
    usersRatings?: UserRatingUpdateManyWithoutUserNestedInput;

    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutUserNestedInput;

    @Field(() => BookmarkUpdateManyWithoutUserNestedInput, {nullable:true})
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput;

    @Field(() => ReviewUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: ReviewUpdateManyWithoutUserNestedInput;

    @Field(() => UserCollectionMappingUpdateManyWithoutUserNestedInput, {nullable:true})
    userCollectionMapping?: UserCollectionMappingUpdateManyWithoutUserNestedInput;

    @Field(() => ContinueReadingUpdateManyWithoutUserNestedInput, {nullable:true})
    continueReading?: ContinueReadingUpdateManyWithoutUserNestedInput;

    @Field(() => UserComplaintUpdateManyWithoutUserNestedInput, {nullable:true})
    userComplaints?: UserComplaintUpdateManyWithoutUserNestedInput;

    @Field(() => ComplaintReasonUpdateManyWithoutUserNestedInput, {nullable:true})
    complaintReasons?: ComplaintReasonUpdateManyWithoutUserNestedInput;

    @Field(() => ContentComplaintUpdateManyWithoutIssuedByUserNestedInput, {nullable:true})
    issuedContentComplaints?: ContentComplaintUpdateManyWithoutIssuedByUserNestedInput;

    @Field(() => ContentComplaintUpdateManyWithoutResolvedByUserNestedInput, {nullable:true})
    resolvedContentComplaints?: ContentComplaintUpdateManyWithoutResolvedByUserNestedInput;

    @Field(() => BanUpdateManyWithoutIssuedByUserNestedInput, {nullable:true})
    issuedBans?: BanUpdateManyWithoutIssuedByUserNestedInput;

    @Field(() => BanUpdateManyWithoutUserNestedInput, {nullable:true})
    userBans?: BanUpdateManyWithoutUserNestedInput;

    @Field(() => AppealUpdateManyWithoutReviewedByUserNestedInput, {nullable:true})
    reviewedAppeals?: AppealUpdateManyWithoutReviewedByUserNestedInput;

    @Field(() => UserNotificationSettingsUpdateManyWithoutUserNestedInput, {nullable:true})
    userNotificationSettings?: UserNotificationSettingsUpdateManyWithoutUserNestedInput;

    @Field(() => NovelSubscriptionUpdateManyWithoutUserNestedInput, {nullable:true})
    novelsSubscription?: NovelSubscriptionUpdateManyWithoutUserNestedInput;

    @Field(() => NotificationUpdateManyWithoutUserNestedInput, {nullable:true})
    notifications?: NotificationUpdateManyWithoutUserNestedInput;

    @Field(() => AuthorSubscriptionUpdateManyWithoutUserNestedInput, {nullable:true})
    authorSubscription?: AuthorSubscriptionUpdateManyWithoutUserNestedInput;
}
