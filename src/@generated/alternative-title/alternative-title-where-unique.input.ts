import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AlternativeTitleWhereInput } from './alternative-title-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { NovelRelationFilter } from '../novel/novel-relation-filter.input';

@InputType()
export class AlternativeTitleWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [AlternativeTitleWhereInput], {nullable:true})
    AND?: Array<AlternativeTitleWhereInput>;

    @Field(() => [AlternativeTitleWhereInput], {nullable:true})
    OR?: Array<AlternativeTitleWhereInput>;

    @Field(() => [AlternativeTitleWhereInput], {nullable:true})
    NOT?: Array<AlternativeTitleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    novelId?: IntFilter;

    @Field(() => NovelRelationFilter, {nullable:true})
    novel?: NovelRelationFilter;
}
