import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelRatingWhereInput } from './novel-rating-where.input';
import { Type } from 'class-transformer';
import { NovelRatingOrderByWithAggregationInput } from './novel-rating-order-by-with-aggregation.input';
import { NovelRatingScalarFieldEnum } from './novel-rating-scalar-field.enum';
import { NovelRatingScalarWhereWithAggregatesInput } from './novel-rating-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { NovelRatingCountAggregateInput } from './novel-rating-count-aggregate.input';
import { NovelRatingAvgAggregateInput } from './novel-rating-avg-aggregate.input';
import { NovelRatingSumAggregateInput } from './novel-rating-sum-aggregate.input';
import { NovelRatingMinAggregateInput } from './novel-rating-min-aggregate.input';
import { NovelRatingMaxAggregateInput } from './novel-rating-max-aggregate.input';

@ArgsType()
export class NovelRatingGroupByArgs {

    @Field(() => NovelRatingWhereInput, {nullable:true})
    @Type(() => NovelRatingWhereInput)
    where?: NovelRatingWhereInput;

    @Field(() => [NovelRatingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NovelRatingOrderByWithAggregationInput>;

    @Field(() => [NovelRatingScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof NovelRatingScalarFieldEnum>;

    @Field(() => NovelRatingScalarWhereWithAggregatesInput, {nullable:true})
    having?: NovelRatingScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NovelRatingCountAggregateInput, {nullable:true})
    _count?: NovelRatingCountAggregateInput;

    @Field(() => NovelRatingAvgAggregateInput, {nullable:true})
    _avg?: NovelRatingAvgAggregateInput;

    @Field(() => NovelRatingSumAggregateInput, {nullable:true})
    _sum?: NovelRatingSumAggregateInput;

    @Field(() => NovelRatingMinAggregateInput, {nullable:true})
    _min?: NovelRatingMinAggregateInput;

    @Field(() => NovelRatingMaxAggregateInput, {nullable:true})
    _max?: NovelRatingMaxAggregateInput;
}
