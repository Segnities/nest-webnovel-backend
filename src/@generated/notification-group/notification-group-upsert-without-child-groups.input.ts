import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationGroupUpdateWithoutChildGroupsInput } from './notification-group-update-without-child-groups.input';
import { Type } from 'class-transformer';
import { NotificationGroupCreateWithoutChildGroupsInput } from './notification-group-create-without-child-groups.input';
import { NotificationGroupWhereInput } from './notification-group-where.input';

@InputType()
export class NotificationGroupUpsertWithoutChildGroupsInput {

    @Field(() => NotificationGroupUpdateWithoutChildGroupsInput, {nullable:false})
    @Type(() => NotificationGroupUpdateWithoutChildGroupsInput)
    update!: NotificationGroupUpdateWithoutChildGroupsInput;

    @Field(() => NotificationGroupCreateWithoutChildGroupsInput, {nullable:false})
    @Type(() => NotificationGroupCreateWithoutChildGroupsInput)
    create!: NotificationGroupCreateWithoutChildGroupsInput;

    @Field(() => NotificationGroupWhereInput, {nullable:true})
    @Type(() => NotificationGroupWhereInput)
    where?: NotificationGroupWhereInput;
}
