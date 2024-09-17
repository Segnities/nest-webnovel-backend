import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationGroupWhereInput } from './notification-group-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyNotificationGroupArgs {

    @Field(() => NotificationGroupWhereInput, {nullable:true})
    @Type(() => NotificationGroupWhereInput)
    where?: NotificationGroupWhereInput;
}
