import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AppelaReasonWhereInput } from './appela-reason-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { AppealListRelationFilter } from '../appeal/appeal-list-relation-filter.input';

@InputType()
export class AppelaReasonWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [AppelaReasonWhereInput], {nullable:true})
    AND?: Array<AppelaReasonWhereInput>;

    @Field(() => [AppelaReasonWhereInput], {nullable:true})
    OR?: Array<AppelaReasonWhereInput>;

    @Field(() => [AppelaReasonWhereInput], {nullable:true})
    NOT?: Array<AppelaReasonWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => AppealListRelationFilter, {nullable:true})
    appeals?: AppealListRelationFilter;
}
