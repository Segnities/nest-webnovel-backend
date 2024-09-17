import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationGroupWhereInput } from './notification-group-where.input';
import { Type } from 'class-transformer';
import { NotificationGroupUpdateWithoutChildGroupsInput } from './notification-group-update-without-child-groups.input';

@InputType()
export class NotificationGroupUpdateToOneWithWhereWithoutChildGroupsInput {

    @Field(() => NotificationGroupWhereInput, {nullable:true})
    @Type(() => NotificationGroupWhereInput)
    where?: NotificationGroupWhereInput;

    @Field(() => NotificationGroupUpdateWithoutChildGroupsInput, {nullable:false})
    @Type(() => NotificationGroupUpdateWithoutChildGroupsInput)
    data!: NotificationGroupUpdateWithoutChildGroupsInput;
}
