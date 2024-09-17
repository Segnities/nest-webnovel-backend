import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationGroupCreateInput } from './notification-group-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNotificationGroupArgs {

    @Field(() => NotificationGroupCreateInput, {nullable:false})
    @Type(() => NotificationGroupCreateInput)
    data!: NotificationGroupCreateInput;
}
