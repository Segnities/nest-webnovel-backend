import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ComplaintTargetType } from '../complaint-target-type/complaint-target-type.model';
import { ComplaintCategoryCount } from './complaint-category-count.output';

@ObjectType()
export class ComplaintCategory {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => [ComplaintTargetType], {nullable:true})
    complaintTargetTypes?: Array<ComplaintTargetType>;

    @Field(() => ComplaintCategoryCount, {nullable:false})
    _count?: ComplaintCategoryCount;
}
