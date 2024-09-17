import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ComplaintCategoryWhereInput } from './complaint-category-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ComplaintTargetTypeListRelationFilter } from '../complaint-target-type/complaint-target-type-list-relation-filter.input';

@InputType()
export class ComplaintCategoryWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ComplaintCategoryWhereInput], {nullable:true})
    AND?: Array<ComplaintCategoryWhereInput>;

    @Field(() => [ComplaintCategoryWhereInput], {nullable:true})
    OR?: Array<ComplaintCategoryWhereInput>;

    @Field(() => [ComplaintCategoryWhereInput], {nullable:true})
    NOT?: Array<ComplaintCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => ComplaintTargetTypeListRelationFilter, {nullable:true})
    complaintTargetTypes?: ComplaintTargetTypeListRelationFilter;
}
