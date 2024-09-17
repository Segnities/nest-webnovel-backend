import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class NovelSubscriptionScalarWhereInput {

    @Field(() => [NovelSubscriptionScalarWhereInput], {nullable:true})
    AND?: Array<NovelSubscriptionScalarWhereInput>;

    @Field(() => [NovelSubscriptionScalarWhereInput], {nullable:true})
    OR?: Array<NovelSubscriptionScalarWhereInput>;

    @Field(() => [NovelSubscriptionScalarWhereInput], {nullable:true})
    NOT?: Array<NovelSubscriptionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    novelId?: IntFilter;
}
