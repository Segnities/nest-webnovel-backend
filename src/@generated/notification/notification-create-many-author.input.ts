import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NotificationRelatedEntity } from '../prisma/notification-related-entity.enum';
import { NotificationMessageStatus } from '../prisma/notification-message-status.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class NotificationCreateManyAuthorInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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
    novelId?: number;

    @Field(() => Int, {nullable:true})
    commentId?: number;

    @Field(() => Int, {nullable:true})
    reviewId?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Int, {nullable:true})
    notificationGroupId?: number;
}
