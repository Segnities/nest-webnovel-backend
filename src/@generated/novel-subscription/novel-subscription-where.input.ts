import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { NovelRelationFilter } from '../novel/novel-relation-filter.input';

@InputType()
export class NovelSubscriptionWhereInput {

    @Field(() => [NovelSubscriptionWhereInput], {nullable:true})
    AND?: Array<NovelSubscriptionWhereInput>;

    @Field(() => [NovelSubscriptionWhereInput], {nullable:true})
    OR?: Array<NovelSubscriptionWhereInput>;

    @Field(() => [NovelSubscriptionWhereInput], {nullable:true})
    NOT?: Array<NovelSubscriptionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    novelId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => NovelRelationFilter, {nullable:true})
    novel?: NovelRelationFilter;
}
