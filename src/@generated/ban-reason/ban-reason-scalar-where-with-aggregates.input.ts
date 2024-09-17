import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class BanReasonScalarWhereWithAggregatesInput {

    @Field(() => [BanReasonScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BanReasonScalarWhereWithAggregatesInput>;

    @Field(() => [BanReasonScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BanReasonScalarWhereWithAggregatesInput>;

    @Field(() => [BanReasonScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BanReasonScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;
}
