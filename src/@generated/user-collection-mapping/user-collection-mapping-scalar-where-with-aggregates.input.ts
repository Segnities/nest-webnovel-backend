import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UserCollectionMappingScalarWhereWithAggregatesInput {

    @Field(() => [UserCollectionMappingScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserCollectionMappingScalarWhereWithAggregatesInput>;

    @Field(() => [UserCollectionMappingScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserCollectionMappingScalarWhereWithAggregatesInput>;

    @Field(() => [UserCollectionMappingScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserCollectionMappingScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    collectionId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
