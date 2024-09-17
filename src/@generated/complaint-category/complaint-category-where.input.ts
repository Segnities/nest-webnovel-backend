import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ComplaintTargetTypeListRelationFilter } from '../complaint-target-type/complaint-target-type-list-relation-filter.input';

@InputType()
export class ComplaintCategoryWhereInput {

    @Field(() => [ComplaintCategoryWhereInput], {nullable:true})
    AND?: Array<ComplaintCategoryWhereInput>;

    @Field(() => [ComplaintCategoryWhereInput], {nullable:true})
    OR?: Array<ComplaintCategoryWhereInput>;

    @Field(() => [ComplaintCategoryWhereInput], {nullable:true})
    NOT?: Array<ComplaintCategoryWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => ComplaintTargetTypeListRelationFilter, {nullable:true})
    complaintTargetTypes?: ComplaintTargetTypeListRelationFilter;
}
