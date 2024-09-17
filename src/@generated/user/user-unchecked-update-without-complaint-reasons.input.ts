import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumProviderFieldUpdateOperationsInput } from '../prisma/enum-provider-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { UserRatingUncheckedUpdateManyWithoutUserNestedInput } from '../user-rating/user-rating-unchecked-update-many-without-user-nested.input';
import { CommentUncheckedUpdateManyWithoutUserNestedInput } from '../comment/comment-unchecked-update-many-without-user-nested.input';
import { BookmarkUncheckedUpdateManyWithoutUserNestedInput } from '../bookmark/bookmark-unchecked-update-many-without-user-nested.input';
import { ReviewUncheckedUpdateManyWithoutUserNestedInput } from '../review/review-unchecked-update-many-without-user-nested.input';
import { UserCollectionMappingUncheckedUpdateManyWithoutUserNestedInput } from '../user-collection-mapping/user-collection-mapping-unchecked-update-many-without-user-nested.input';
import { ContinueReadingUncheckedUpdateManyWithoutUserNestedInput } from '../continue-reading/continue-reading-unchecked-update-many-without-user-nested.input';
import { NewsUncheckedUpdateManyWithoutUserNestedInput } from '../news/news-unchecked-update-many-without-user-nested.input';
import { UserComplaintUncheckedUpdateManyWithoutUserNestedInput } from '../user-complaint/user-complaint-unchecked-update-many-without-user-nested.input';
import { ContentComplaintUncheckedUpdateManyWithoutIssuedByUserNestedInput } from '../content-complaint/content-complaint-unchecked-update-many-without-issued-by-user-nested.input';
import { ContentComplaintUncheckedUpdateManyWithoutResolvedByUserNestedInput } from '../content-complaint/content-complaint-unchecked-update-many-without-resolved-by-user-nested.input';
import { BanUncheckedUpdateManyWithoutIssuedByUserNestedInput } from '../ban/ban-unchecked-update-many-without-issued-by-user-nested.input';
import { BanUncheckedUpdateManyWithoutUserNestedInput } from '../ban/ban-unchecked-update-many-without-user-nested.input';
import { AppealUncheckedUpdateManyWithoutReviewedByUserNestedInput } from '../appeal/appeal-unchecked-update-many-without-reviewed-by-user-nested.input';
import { UserNotificationSettingsUncheckedUpdateManyWithoutUserNestedInput } from '../user-notification-settings/user-notification-settings-unchecked-update-many-without-user-nested.input';
import { NovelSubscriptionUncheckedUpdateManyWithoutUserNestedInput } from '../novel-subscription/novel-subscription-unchecked-update-many-without-user-nested.input';
import { NotificationUncheckedUpdateManyWithoutUserNestedInput } from '../notification/notification-unchecked-update-many-without-user-nested.input';
import { AuthorSubscriptionUncheckedUpdateManyWithoutUserNestedInput } from '../author-subscription/author-subscription-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutComplaintReasonsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    roleId?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    teamId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => UserRatingUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    usersRatings?: UserRatingUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => BookmarkUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => UserCollectionMappingUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    userCollectionMapping?: UserCollectionMappingUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ContinueReadingUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    continueReading?: ContinueReadingUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => NewsUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    news?: NewsUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => UserComplaintUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    userComplaints?: UserComplaintUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ContentComplaintUncheckedUpdateManyWithoutIssuedByUserNestedInput, {nullable:true})
    issuedContentComplaints?: ContentComplaintUncheckedUpdateManyWithoutIssuedByUserNestedInput;

    @Field(() => ContentComplaintUncheckedUpdateManyWithoutResolvedByUserNestedInput, {nullable:true})
    resolvedContentComplaints?: ContentComplaintUncheckedUpdateManyWithoutResolvedByUserNestedInput;

    @Field(() => BanUncheckedUpdateManyWithoutIssuedByUserNestedInput, {nullable:true})
    issuedBans?: BanUncheckedUpdateManyWithoutIssuedByUserNestedInput;

    @Field(() => BanUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    userBans?: BanUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => AppealUncheckedUpdateManyWithoutReviewedByUserNestedInput, {nullable:true})
    reviewedAppeals?: AppealUncheckedUpdateManyWithoutReviewedByUserNestedInput;

    @Field(() => UserNotificationSettingsUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    userNotificationSettings?: UserNotificationSettingsUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => NovelSubscriptionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    novelsSubscription?: NovelSubscriptionUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => NotificationUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => AuthorSubscriptionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    authorSubscription?: AuthorSubscriptionUncheckedUpdateManyWithoutUserNestedInput;
}
