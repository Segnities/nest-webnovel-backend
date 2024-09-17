import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NotificationRelatedEntity } from '../prisma/notification-related-entity.enum';
import { NotificationMessageStatus } from '../prisma/notification-message-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { NotificationCountAggregate } from './notification-count-aggregate.output';
import { NotificationAvgAggregate } from './notification-avg-aggregate.output';
import { NotificationSumAggregate } from './notification-sum-aggregate.output';
import { NotificationMinAggregate } from './notification-min-aggregate.output';
import { NotificationMaxAggregate } from './notification-max-aggregate.output';

@ObjectType()
export class NotificationGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => String, {nullable:false})
    img!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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

    @Field(() => Int, {nullable:true})
    authorId?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Int, {nullable:true})
    notificationGroupId?: number;

    @Field(() => NotificationCountAggregate, {nullable:true})
    _count?: NotificationCountAggregate;

    @Field(() => NotificationAvgAggregate, {nullable:true})
    _avg?: NotificationAvgAggregate;

    @Field(() => NotificationSumAggregate, {nullable:true})
    _sum?: NotificationSumAggregate;

    @Field(() => NotificationMinAggregate, {nullable:true})
    _min?: NotificationMinAggregate;

    @Field(() => NotificationMaxAggregate, {nullable:true})
    _max?: NotificationMaxAggregate;
}
