import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateManyNotificationGroupInput } from './notification-create-many-notification-group.input';
import { Type } from 'class-transformer';

@InputType()
export class NotificationCreateManyNotificationGroupInputEnvelope {

    @Field(() => [NotificationCreateManyNotificationGroupInput], {nullable:false})
    @Type(() => NotificationCreateManyNotificationGroupInput)
    data!: Array<NotificationCreateManyNotificationGroupInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
