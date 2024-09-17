import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelRatingWhereInput } from './novel-rating-where.input';
import { Type } from 'class-transformer';
import { NovelRatingOrderByWithRelationInput } from './novel-rating-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NovelRatingWhereUniqueInput } from './novel-rating-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NovelRatingCountAggregateInput } from './novel-rating-count-aggregate.input';
import { NovelRatingAvgAggregateInput } from './novel-rating-avg-aggregate.input';
import { NovelRatingSumAggregateInput } from './novel-rating-sum-aggregate.input';
import { NovelRatingMinAggregateInput } from './novel-rating-min-aggregate.input';
import { NovelRatingMaxAggregateInput } from './novel-rating-max-aggregate.input';

@ArgsType()
export class NovelRatingAggregateArgs {

    @Field(() => NovelRatingWhereInput, {nullable:true})
    @Type(() => NovelRatingWhereInput)
    where?: NovelRatingWhereInput;

    @Field(() => [NovelRatingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NovelRatingOrderByWithRelationInput>;

    @Field(() => NovelRatingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NovelRatingWhereUniqueInput, 'id' | 'novelId'>;

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
