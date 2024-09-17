import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppealWhereInput } from './appeal-where.input';
import { Type } from 'class-transformer';
import { AppealOrderByWithRelationInput } from './appeal-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AppealWhereUniqueInput } from './appeal-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AppealCountAggregateInput } from './appeal-count-aggregate.input';
import { AppealAvgAggregateInput } from './appeal-avg-aggregate.input';
import { AppealSumAggregateInput } from './appeal-sum-aggregate.input';
import { AppealMinAggregateInput } from './appeal-min-aggregate.input';
import { AppealMaxAggregateInput } from './appeal-max-aggregate.input';

@ArgsType()
export class AppealAggregateArgs {

    @Field(() => AppealWhereInput, {nullable:true})
    @Type(() => AppealWhereInput)
    where?: AppealWhereInput;

    @Field(() => [AppealOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AppealOrderByWithRelationInput>;

    @Field(() => AppealWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AppealWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AppealCountAggregateInput, {nullable:true})
    _count?: AppealCountAggregateInput;

    @Field(() => AppealAvgAggregateInput, {nullable:true})
    _avg?: AppealAvgAggregateInput;

    @Field(() => AppealSumAggregateInput, {nullable:true})
    _sum?: AppealSumAggregateInput;

    @Field(() => AppealMinAggregateInput, {nullable:true})
    _min?: AppealMinAggregateInput;

    @Field(() => AppealMaxAggregateInput, {nullable:true})
    _max?: AppealMaxAggregateInput;
}
