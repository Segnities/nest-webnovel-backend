import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ComplaintTargetTypeCountAggregate } from './complaint-target-type-count-aggregate.output';
import { ComplaintTargetTypeAvgAggregate } from './complaint-target-type-avg-aggregate.output';
import { ComplaintTargetTypeSumAggregate } from './complaint-target-type-sum-aggregate.output';
import { ComplaintTargetTypeMinAggregate } from './complaint-target-type-min-aggregate.output';
import { ComplaintTargetTypeMaxAggregate } from './complaint-target-type-max-aggregate.output';

@ObjectType()
export class ComplaintTargetTypeGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:false})
    complaintCategoryId!: number;

    @Field(() => ComplaintTargetTypeCountAggregate, {nullable:true})
    _count?: ComplaintTargetTypeCountAggregate;

    @Field(() => ComplaintTargetTypeAvgAggregate, {nullable:true})
    _avg?: ComplaintTargetTypeAvgAggregate;

    @Field(() => ComplaintTargetTypeSumAggregate, {nullable:true})
    _sum?: ComplaintTargetTypeSumAggregate;

    @Field(() => ComplaintTargetTypeMinAggregate, {nullable:true})
    _min?: ComplaintTargetTypeMinAggregate;

    @Field(() => ComplaintTargetTypeMaxAggregate, {nullable:true})
    _max?: ComplaintTargetTypeMaxAggregate;
}
