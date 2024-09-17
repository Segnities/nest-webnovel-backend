import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NotificationRelatedEntity } from '../prisma/notification-related-entity.enum';
import { NotificationMessageStatus } from '../prisma/notification-message-status.enum';

@ObjectType()
export class NotificationMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => String, {nullable:true})
    img?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    typeId?: number;

    @Field(() => NotificationRelatedEntity, {nullable:true})
    relatedEntityType?: keyof typeof NotificationRelatedEntity;

    @Field(() => Int, {nullable:true})
    relatedEntityId?: number;

    @Field(() => NotificationMessageStatus, {nullable:true})
    notificationStatus?: keyof typeof NotificationMessageStatus;

    @Field(() => Int, {nullable:true})
    novelId?: number;

    @Field(() => Int, {nullable:true})
    commentId?: number;

    @Field(() => Int, {nullable:true})
    reviewId?: number;

    @Field(() => Int, {nullable:true})
    authorId?: number;

    @Field(() => Int, {nullable:true})
    notificationGroupId?: number;
}
