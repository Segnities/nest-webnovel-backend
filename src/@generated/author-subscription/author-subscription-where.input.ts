import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { AuthorRelationFilter } from '../author/author-relation-filter.input';

@InputType()
export class AuthorSubscriptionWhereInput {

    @Field(() => [AuthorSubscriptionWhereInput], {nullable:true})
    AND?: Array<AuthorSubscriptionWhereInput>;

    @Field(() => [AuthorSubscriptionWhereInput], {nullable:true})
    OR?: Array<AuthorSubscriptionWhereInput>;

    @Field(() => [AuthorSubscriptionWhereInput], {nullable:true})
    NOT?: Array<AuthorSubscriptionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    authorId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => AuthorRelationFilter, {nullable:true})
    author?: AuthorRelationFilter;
}
