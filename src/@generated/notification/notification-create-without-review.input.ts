import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationRelatedEntity } from '../prisma/notification-related-entity.enum';
import { Int } from '@nestjs/graphql';
import { NotificationMessageStatus } from '../prisma/notification-message-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { UserCreateNestedOneWithoutNotificationsInput } from '../user/user-create-nested-one-without-notifications.input';
import { NotificationTypeCreateNestedOneWithoutNotificationsInput } from '../notification-type/notification-type-create-nested-one-without-notifications.input';
import { NovelCreateNestedOneWithoutNotificationsInput } from '../novel/novel-create-nested-one-without-notifications.input';
import { CommentCreateNestedOneWithoutNotificationsInput } from '../comment/comment-create-nested-one-without-notifications.input';
import { AuthorCreateNestedOneWithoutNotificationsInput } from '../author/author-create-nested-one-without-notifications.input';
import { NotificationGroupCreateNestedOneWithoutNotificationsInput } from '../notification-group/notification-group-create-nested-one-without-notifications.input';

@InputType()
export class NotificationCreateWithoutReviewInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => String, {nullable:false})
    img!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => NotificationRelatedEntity, {nullable:false})
    relatedEntityType!: keyof typeof NotificationRelatedEntity;

    @Field(() => Int, {nullable:false})
    relatedEntityId!: number;

    @Field(() => NotificationMessageStatus, {nullable:false})
    notificationStatus!: keyof typeof NotificationMessageStatus;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => UserCreateNestedOneWithoutNotificationsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutNotificationsInput;

    @Field(() => NotificationTypeCreateNestedOneWithoutNotificationsInput, {nullable:false})
    type!: NotificationTypeCreateNestedOneWithoutNotificationsInput;

    @Field(() => NovelCreateNestedOneWithoutNotificationsInput, {nullable:true})
    novel?: NovelCreateNestedOneWithoutNotificationsInput;

    @Field(() => CommentCreateNestedOneWithoutNotificationsInput, {nullable:true})
    comment?: CommentCreateNestedOneWithoutNotificationsInput;

    @Field(() => AuthorCreateNestedOneWithoutNotificationsInput, {nullable:true})
    author?: AuthorCreateNestedOneWithoutNotificationsInput;

    @Field(() => NotificationGroupCreateNestedOneWithoutNotificationsInput, {nullable:true})
    notificationGroup?: NotificationGroupCreateNestedOneWithoutNotificationsInput;
}
