import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Notification } from '../notification/notification.model';
import { NotificationGroupCount } from './notification-group-count.output';

@ObjectType()
export class NotificationGroup {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isDefault!: boolean;

    @Field(() => Int, {nullable:true})
    parentGroupId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => NotificationGroup, {nullable:true})
    parentGroup?: NotificationGroup | null;

    @Field(() => [NotificationGroup], {nullable:true})
    childGroups?: Array<NotificationGroup>;

    @Field(() => [Notification], {nullable:true})
    notifications?: Array<Notification>;

    @Field(() => NotificationGroupCount, {nullable:false})
    _count?: NotificationGroupCount;
}
