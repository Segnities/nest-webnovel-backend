import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NotificationRelatedEntity } from '../prisma/notification-related-entity.enum';
import { NotificationMessageStatus } from '../prisma/notification-message-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { User } from '../user/user.model';
import { NotificationType } from '../notification-type/notification-type.model';
import { Novel } from '../novel/novel.model';
import { Comment } from '../comment/comment.model';
import { Review } from '../review/review.model';
import { Author } from '../author/author.model';
import { NotificationGroup } from '../notification-group/notification-group.model';

@ObjectType()
export class Notification {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => String, {nullable:false})
    img!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    typeId!: number;

    @Field(() => NotificationRelatedEntity, {nullable:false})
    relatedEntityType!: keyof typeof NotificationRelatedEntity;

    @Field(() => Int, {nullable:false})
    relatedEntityId!: number;

    @Field(() => NotificationMessageStatus, {nullable:false})
    notificationStatus!: keyof typeof NotificationMessageStatus;

    @Field(() => Int, {nullable:true})
    novelId!: number | null;

    @Field(() => Int, {nullable:true})
    commentId!: number | null;

    @Field(() => Int, {nullable:true})
    reviewId!: number | null;

    @Field(() => Int, {nullable:true})
    authorId!: number | null;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;

    @Field(() => Int, {nullable:true})
    notificationGroupId!: number | null;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => NotificationType, {nullable:false})
    type?: NotificationType;

    @Field(() => Novel, {nullable:true})
    novel?: Novel | null;

    @Field(() => Comment, {nullable:true})
    comment?: Comment | null;

    @Field(() => Review, {nullable:true})
    review?: Review | null;

    @Field(() => Author, {nullable:true})
    author?: Author | null;

    @Field(() => NotificationGroup, {nullable:true})
    notificationGroup?: NotificationGroup | null;
}
