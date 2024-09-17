import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { NovelListRelationFilter } from '../novel/novel-list-relation-filter.input';

@InputType()
export class GenreWhereInput {

    @Field(() => [GenreWhereInput], {nullable:true})
    AND?: Array<GenreWhereInput>;

    @Field(() => [GenreWhereInput], {nullable:true})
    OR?: Array<GenreWhereInput>;

    @Field(() => [GenreWhereInput], {nullable:true})
    NOT?: Array<GenreWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => NovelListRelationFilter, {nullable:true})
    novels?: NovelListRelationFilter;
}
