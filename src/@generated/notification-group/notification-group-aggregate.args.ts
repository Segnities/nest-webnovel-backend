import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationGroupWhereInput } from './notification-group-where.input';
import { Type } from 'class-transformer';
import { NotificationGroupOrderByWithRelationInput } from './notification-group-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NotificationGroupWhereUniqueInput } from './notification-group-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NotificationGroupCountAggregateInput } from './notification-group-count-aggregate.input';
import { NotificationGroupAvgAggregateInput } from './notification-group-avg-aggregate.input';
import { NotificationGroupSumAggregateInput } from './notification-group-sum-aggregate.input';
import { NotificationGroupMinAggregateInput } from './notification-group-min-aggregate.input';
import { NotificationGroupMaxAggregateInput } from './notification-group-max-aggregate.input';

@ArgsType()
export class NotificationGroupAggregateArgs {

    @Field(() => NotificationGroupWhereInput, {nullable:true})
    @Type(() => NotificationGroupWhereInput)
    where?: NotificationGroupWhereInput;

    @Field(() => [NotificationGroupOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NotificationGroupOrderByWithRelationInput>;

    @Field(() => NotificationGroupWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NotificationGroupWhereUniqueInput, 'id'>;

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
