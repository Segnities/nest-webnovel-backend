import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationGroupUpdateManyMutationInput } from './notification-group-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NotificationGroupWhereInput } from './notification-group-where.input';

@ArgsType()
export class UpdateManyNotificationGroupArgs {

    @Field(() => NotificationGroupUpdateManyMutationInput, {nullable:false})
    @Type(() => NotificationGroupUpdateManyMutationInput)
    data!: NotificationGroupUpdateManyMutationInput;

    @Field(() => NotificationGroupWhereInput, {nullable:true})
    @Type(() => NotificationGroupWhereInput)
    where?: NotificationGroupWhereInput;
}
