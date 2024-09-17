import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class NovelSubscriptionScalarWhereWithAggregatesInput {

    @Field(() => [NovelSubscriptionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NovelSubscriptionScalarWhereWithAggregatesInput>;

    @Field(() => [NovelSubscriptionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NovelSubscriptionScalarWhereWithAggregatesInput>;

    @Field(() => [NovelSubscriptionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NovelSubscriptionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    novelId?: IntWithAggregatesFilter;
}
