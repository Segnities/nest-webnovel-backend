import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NewsWhereInput } from './news-where.input';
import { Type } from 'class-transformer';
import { NewsOrderByWithAggregationInput } from './news-order-by-with-aggregation.input';
import { NewsScalarFieldEnum } from './news-scalar-field.enum';
import { NewsScalarWhereWithAggregatesInput } from './news-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { NewsCountAggregateInput } from './news-count-aggregate.input';
import { NewsAvgAggregateInput } from './news-avg-aggregate.input';
import { NewsSumAggregateInput } from './news-sum-aggregate.input';
import { NewsMinAggregateInput } from './news-min-aggregate.input';
import { NewsMaxAggregateInput } from './news-max-aggregate.input';

@ArgsType()
export class NewsGroupByArgs {

    @Field(() => NewsWhereInput, {nullable:true})
    @Type(() => NewsWhereInput)
    where?: NewsWhereInput;

    @Field(() => [NewsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NewsOrderByWithAggregationInput>;

    @Field(() => [NewsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof NewsScalarFieldEnum>;

    @Field(() => NewsScalarWhereWithAggregatesInput, {nullable:true})
    having?: NewsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NewsCountAggregateInput, {nullable:true})
    _count?: NewsCountAggregateInput;

    @Field(() => NewsAvgAggregateInput, {nullable:true})
    _avg?: NewsAvgAggregateInput;

    @Field(() => NewsSumAggregateInput, {nullable:true})
    _sum?: NewsSumAggregateInput;

    @Field(() => NewsMinAggregateInput, {nullable:true})
    _min?: NewsMinAggregateInput;

    @Field(() => NewsMaxAggregateInput, {nullable:true})
    _max?: NewsMaxAggregateInput;
}
