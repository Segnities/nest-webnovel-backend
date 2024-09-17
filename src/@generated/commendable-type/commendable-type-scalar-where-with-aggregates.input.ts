import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class CommendableTypeScalarWhereWithAggregatesInput {

    @Field(() => [CommendableTypeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CommendableTypeScalarWhereWithAggregatesInput>;

    @Field(() => [CommendableTypeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CommendableTypeScalarWhereWithAggregatesInput>;

    @Field(() => [CommendableTypeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CommendableTypeScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
