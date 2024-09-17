import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class NovelCollectionMappingScalarWhereWithAggregatesInput {

    @Field(() => [NovelCollectionMappingScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NovelCollectionMappingScalarWhereWithAggregatesInput>;

    @Field(() => [NovelCollectionMappingScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NovelCollectionMappingScalarWhereWithAggregatesInput>;

    @Field(() => [NovelCollectionMappingScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NovelCollectionMappingScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    novelId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userCollectionId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
