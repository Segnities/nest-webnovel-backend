import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NotificationGroupCountAggregate } from './notification-group-count-aggregate.output';
import { NotificationGroupAvgAggregate } from './notification-group-avg-aggregate.output';
import { NotificationGroupSumAggregate } from './notification-group-sum-aggregate.output';
import { NotificationGroupMinAggregate } from './notification-group-min-aggregate.output';
import { NotificationGroupMaxAggregate } from './notification-group-max-aggregate.output';

@ObjectType()
export class AggregateNotificationGroup {

    @Field(() => NotificationGroupCountAggregate, {nullable:true})
    _count?: NotificationGroupCountAggregate;

    @Field(() => NotificationGroupAvgAggregate, {nullable:true})
    _avg?: NotificationGroupAvgAggregate;

    @Field(() => NotificationGroupSumAggregate, {nullable:true})
    _sum?: NotificationGroupSumAggregate;

    @Field(() => NotificationGroupMinAggregate, {nullable:true})
    _min?: NotificationGroupMinAggregate;

    @Field(() => NotificationGroupMaxAggregate, {nullable:true})
    _max?: NotificationGroupMaxAggregate;
}
