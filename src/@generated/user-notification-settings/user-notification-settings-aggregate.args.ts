import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserNotificationSettingsWhereInput } from './user-notification-settings-where.input';
import { Type } from 'class-transformer';
import { UserNotificationSettingsOrderByWithRelationInput } from './user-notification-settings-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserNotificationSettingsWhereUniqueInput } from './user-notification-settings-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserNotificationSettingsCountAggregateInput } from './user-notification-settings-count-aggregate.input';
import { UserNotificationSettingsAvgAggregateInput } from './user-notification-settings-avg-aggregate.input';
import { UserNotificationSettingsSumAggregateInput } from './user-notification-settings-sum-aggregate.input';
import { UserNotificationSettingsMinAggregateInput } from './user-notification-settings-min-aggregate.input';
import { UserNotificationSettingsMaxAggregateInput } from './user-notification-settings-max-aggregate.input';

@ArgsType()
export class UserNotificationSettingsAggregateArgs {

    @Field(() => UserNotificationSettingsWhereInput, {nullable:true})
    @Type(() => UserNotificationSettingsWhereInput)
    where?: UserNotificationSettingsWhereInput;

    @Field(() => [UserNotificationSettingsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserNotificationSettingsOrderByWithRelationInput>;

    @Field(() => UserNotificationSettingsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserNotificationSettingsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserNotificationSettingsCountAggregateInput, {nullable:true})
    _count?: UserNotificationSettingsCountAggregateInput;

    @Field(() => UserNotificationSettingsAvgAggregateInput, {nullable:true})
    _avg?: UserNotificationSettingsAvgAggregateInput;

    @Field(() => UserNotificationSettingsSumAggregateInput, {nullable:true})
    _sum?: UserNotificationSettingsSumAggregateInput;

    @Field(() => UserNotificationSettingsMinAggregateInput, {nullable:true})
    _min?: UserNotificationSettingsMinAggregateInput;

    @Field(() => UserNotificationSettingsMaxAggregateInput, {nullable:true})
    _max?: UserNotificationSettingsMaxAggregateInput;
}
