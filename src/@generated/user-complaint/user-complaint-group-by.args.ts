import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserComplaintWhereInput } from './user-complaint-where.input';
import { Type } from 'class-transformer';
import { UserComplaintOrderByWithAggregationInput } from './user-complaint-order-by-with-aggregation.input';
import { UserComplaintScalarFieldEnum } from './user-complaint-scalar-field.enum';
import { UserComplaintScalarWhereWithAggregatesInput } from './user-complaint-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserComplaintCountAggregateInput } from './user-complaint-count-aggregate.input';
import { UserComplaintAvgAggregateInput } from './user-complaint-avg-aggregate.input';
import { UserComplaintSumAggregateInput } from './user-complaint-sum-aggregate.input';
import { UserComplaintMinAggregateInput } from './user-complaint-min-aggregate.input';
import { UserComplaintMaxAggregateInput } from './user-complaint-max-aggregate.input';

@ArgsType()
export class UserComplaintGroupByArgs {

    @Field(() => UserComplaintWhereInput, {nullable:true})
    @Type(() => UserComplaintWhereInput)
    where?: UserComplaintWhereInput;

    @Field(() => [UserComplaintOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserComplaintOrderByWithAggregationInput>;

    @Field(() => [UserComplaintScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserComplaintScalarFieldEnum>;

    @Field(() => UserComplaintScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserComplaintScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserComplaintCountAggregateInput, {nullable:true})
    _count?: UserComplaintCountAggregateInput;

    @Field(() => UserComplaintAvgAggregateInput, {nullable:true})
    _avg?: UserComplaintAvgAggregateInput;

    @Field(() => UserComplaintSumAggregateInput, {nullable:true})
    _sum?: UserComplaintSumAggregateInput;

    @Field(() => UserComplaintMinAggregateInput, {nullable:true})
    _min?: UserComplaintMinAggregateInput;

    @Field(() => UserComplaintMaxAggregateInput, {nullable:true})
    _max?: UserComplaintMaxAggregateInput;
}
