import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NewsWhereInput } from './news-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CommendableTypeRelationFilter } from '../commendable-type/commendable-type-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ComplaintTargetTypeRelationFilter } from '../complaint-target-type/complaint-target-type-relation-filter.input';

@InputType()
export class NewsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [NewsWhereInput], {nullable:true})
    AND?: Array<NewsWhereInput>;

    @Field(() => [NewsWhereInput], {nullable:true})
    OR?: Array<NewsWhereInput>;

    @Field(() => [NewsWhereInput], {nullable:true})
    NOT?: Array<NewsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    body?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    likes?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    views?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    published?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    commendableTypeId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    complaintTargetId?: IntFilter;

    @Field(() => CommendableTypeRelationFilter, {nullable:true})
    commendableType?: CommendableTypeRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => ComplaintTargetTypeRelationFilter, {nullable:true})
    complainTargetType?: ComplaintTargetTypeRelationFilter;
}
