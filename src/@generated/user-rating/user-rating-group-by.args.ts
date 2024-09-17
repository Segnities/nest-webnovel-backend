import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRatingWhereInput } from './user-rating-where.input';
import { Type } from 'class-transformer';
import { UserRatingOrderByWithAggregationInput } from './user-rating-order-by-with-aggregation.input';
import { UserRatingScalarFieldEnum } from './user-rating-scalar-field.enum';
import { UserRatingScalarWhereWithAggregatesInput } from './user-rating-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserRatingCountAggregateInput } from './user-rating-count-aggregate.input';
import { UserRatingAvgAggregateInput } from './user-rating-avg-aggregate.input';
import { UserRatingSumAggregateInput } from './user-rating-sum-aggregate.input';
import { UserRatingMinAggregateInput } from './user-rating-min-aggregate.input';
import { UserRatingMaxAggregateInput } from './user-rating-max-aggregate.input';

@ArgsType()
export class UserRatingGroupByArgs {

    @Field(() => UserRatingWhereInput, {nullable:true})
    @Type(() => UserRatingWhereInput)
    where?: UserRatingWhereInput;

    @Field(() => [UserRatingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserRatingOrderByWithAggregationInput>;

    @Field(() => [UserRatingScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserRatingScalarFieldEnum>;

    @Field(() => UserRatingScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserRatingScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserRatingCountAggregateInput, {nullable:true})
    _count?: UserRatingCountAggregateInput;

    @Field(() => UserRatingAvgAggregateInput, {nullable:true})
    _avg?: UserRatingAvgAggregateInput;

    @Field(() => UserRatingSumAggregateInput, {nullable:true})
    _sum?: UserRatingSumAggregateInput;

    @Field(() => UserRatingMinAggregateInput, {nullable:true})
    _min?: UserRatingMinAggregateInput;

    @Field(() => UserRatingMaxAggregateInput, {nullable:true})
    _max?: UserRatingMaxAggregateInput;
}
