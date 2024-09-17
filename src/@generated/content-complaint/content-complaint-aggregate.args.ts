import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContentComplaintWhereInput } from './content-complaint-where.input';
import { Type } from 'class-transformer';
import { ContentComplaintOrderByWithRelationInput } from './content-complaint-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ContentComplaintWhereUniqueInput } from './content-complaint-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ContentComplaintCountAggregateInput } from './content-complaint-count-aggregate.input';
import { ContentComplaintAvgAggregateInput } from './content-complaint-avg-aggregate.input';
import { ContentComplaintSumAggregateInput } from './content-complaint-sum-aggregate.input';
import { ContentComplaintMinAggregateInput } from './content-complaint-min-aggregate.input';
import { ContentComplaintMaxAggregateInput } from './content-complaint-max-aggregate.input';

@ArgsType()
export class ContentComplaintAggregateArgs {

    @Field(() => ContentComplaintWhereInput, {nullable:true})
    @Type(() => ContentComplaintWhereInput)
    where?: ContentComplaintWhereInput;

    @Field(() => [ContentComplaintOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ContentComplaintOrderByWithRelationInput>;

    @Field(() => ContentComplaintWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ContentComplaintWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ContentComplaintCountAggregateInput, {nullable:true})
    _count?: ContentComplaintCountAggregateInput;

    @Field(() => ContentComplaintAvgAggregateInput, {nullable:true})
    _avg?: ContentComplaintAvgAggregateInput;

    @Field(() => ContentComplaintSumAggregateInput, {nullable:true})
    _sum?: ContentComplaintSumAggregateInput;

    @Field(() => ContentComplaintMinAggregateInput, {nullable:true})
    _min?: ContentComplaintMinAggregateInput;

    @Field(() => ContentComplaintMaxAggregateInput, {nullable:true})
    _max?: ContentComplaintMaxAggregateInput;
}
