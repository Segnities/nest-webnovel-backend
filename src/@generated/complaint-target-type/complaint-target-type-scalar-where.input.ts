import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ComplaintTargetTypeScalarWhereInput {

    @Field(() => [ComplaintTargetTypeScalarWhereInput], {nullable:true})
    AND?: Array<ComplaintTargetTypeScalarWhereInput>;

    @Field(() => [ComplaintTargetTypeScalarWhereInput], {nullable:true})
    OR?: Array<ComplaintTargetTypeScalarWhereInput>;

    @Field(() => [ComplaintTargetTypeScalarWhereInput], {nullable:true})
    NOT?: Array<ComplaintTargetTypeScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    complaintCategoryId?: IntFilter;
}
