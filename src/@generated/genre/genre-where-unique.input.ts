import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GenreWhereInput } from './genre-where.input';
import { NovelListRelationFilter } from '../novel/novel-list-relation-filter.input';

@InputType()
export class GenreWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => [GenreWhereInput], {nullable:true})
    AND?: Array<GenreWhereInput>;

    @Field(() => [GenreWhereInput], {nullable:true})
    OR?: Array<GenreWhereInput>;

    @Field(() => [GenreWhereInput], {nullable:true})
    NOT?: Array<GenreWhereInput>;

    @Field(() => NovelListRelationFilter, {nullable:true})
    novels?: NovelListRelationFilter;
}
