import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationGroupWhereInput } from './notification-group-where.input';
import { Type } from 'class-transformer';
import { NotificationGroupOrderByWithAggregationInput } from './notification-group-order-by-with-aggregation.input';
import { NotificationGroupScalarFieldEnum } from './notification-group-scalar-field.enum';
import { NotificationGroupScalarWhereWithAggregatesInput } from './notification-group-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { NotificationGroupCountAggregateInput } from './notification-group-count-aggregate.input';
import { NotificationGroupAvgAggregateInput } from './notification-group-avg-aggregate.input';
import { NotificationGroupSumAggregateInput } from './notification-group-sum-aggregate.input';
import { NotificationGroupMinAggregateInput } from './notification-group-min-aggregate.input';
import { NotificationGroupMaxAggregateInput } from './notification-group-max-aggregate.input';

@ArgsType()
export class NotificationGroupGroupByArgs {

    @Field(() => NotificationGroupWhereInput, {nullable:true})
    @Type(() => NotificationGroupWhereInput)
    where?: NotificationGroupWhereInput;

    @Field(() => [NotificationGroupOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NotificationGroupOrderByWithAggregationInput>;

    @Field(() => [NotificationGroupScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof NotificationGroupScalarFieldEnum>;

    @Field(() => NotificationGroupScalarWhereWithAggregatesInput, {nullable:true})
    having?: NotificationGroupScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NotificationGroupCountAggregateInput, {nullable:true})
    _count?: NotificationGroupCountAggregateInput;

    @Field(() => NotificationGroupAvgAggregateInput, {nullable:true})
    _avg?: NotificationGroupAvgAggregateInput;

    @Field(() => NotificationGroupSumAggregateInput, {nullable:true})
    _sum?: NotificationGroupSumAggregateInput;

    @Field(() => NotificationGroupMinAggregateInput, {nullable:true})
    _min?: NotificationGroupMinAggregateInput;

    @Field(() => NotificationGroupMaxAggregateInput, {nullable:true})
    _max?: NotificationGroupMaxAggregateInput;
}
