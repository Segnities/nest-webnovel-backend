import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Notification } from '../notification/notification.model';
import { NotificationTypeCount } from './notification-type-count.output';

@ObjectType()
export class NotificationType {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => [Notification], {nullable:true})
    notifications?: Array<Notification>;

    @Field(() => NotificationTypeCount, {nullable:false})
    _count?: NotificationTypeCount;
}
