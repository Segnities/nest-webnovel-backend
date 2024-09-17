import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ComplaintCategoryCountAggregate } from './complaint-category-count-aggregate.output';
import { ComplaintCategoryAvgAggregate } from './complaint-category-avg-aggregate.output';
import { ComplaintCategorySumAggregate } from './complaint-category-sum-aggregate.output';
import { ComplaintCategoryMinAggregate } from './complaint-category-min-aggregate.output';
import { ComplaintCategoryMaxAggregate } from './complaint-category-max-aggregate.output';

@ObjectType()
export class AggregateComplaintCategory {

    @Field(() => ComplaintCategoryCountAggregate, {nullable:true})
    _count?: ComplaintCategoryCountAggregate;

    @Field(() => ComplaintCategoryAvgAggregate, {nullable:true})
    _avg?: ComplaintCategoryAvgAggregate;

    @Field(() => ComplaintCategorySumAggregate, {nullable:true})
    _sum?: ComplaintCategorySumAggregate;

    @Field(() => ComplaintCategoryMinAggregate, {nullable:true})
    _min?: ComplaintCategoryMinAggregate;

    @Field(() => ComplaintCategoryMaxAggregate, {nullable:true})
    _max?: ComplaintCategoryMaxAggregate;
}
