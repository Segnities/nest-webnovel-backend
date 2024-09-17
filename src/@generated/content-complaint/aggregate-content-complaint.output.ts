import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ContentComplaintCountAggregate } from './content-complaint-count-aggregate.output';
import { ContentComplaintAvgAggregate } from './content-complaint-avg-aggregate.output';
import { ContentComplaintSumAggregate } from './content-complaint-sum-aggregate.output';
import { ContentComplaintMinAggregate } from './content-complaint-min-aggregate.output';
import { ContentComplaintMaxAggregate } from './content-complaint-max-aggregate.output';

@ObjectType()
export class AggregateContentComplaint {

    @Field(() => ContentComplaintCountAggregate, {nullable:true})
    _count?: ContentComplaintCountAggregate;

    @Field(() => ContentComplaintAvgAggregate, {nullable:true})
    _avg?: ContentComplaintAvgAggregate;

    @Field(() => ContentComplaintSumAggregate, {nullable:true})
    _sum?: ContentComplaintSumAggregate;

    @Field(() => ContentComplaintMinAggregate, {nullable:true})
    _min?: ContentComplaintMinAggregate;

    @Field(() => ContentComplaintMaxAggregate, {nullable:true})
    _max?: ContentComplaintMaxAggregate;
}
