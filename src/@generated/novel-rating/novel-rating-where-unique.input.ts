import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NovelRatingWhereInput } from './novel-rating-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { NovelRelationFilter } from '../novel/novel-relation-filter.input';

@InputType()
export class NovelRatingWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    novelId?: number;

    @Field(() => [NovelRatingWhereInput], {nullable:true})
    AND?: Array<NovelRatingWhereInput>;

    @Field(() => [NovelRatingWhereInput], {nullable:true})
    OR?: Array<NovelRatingWhereInput>;

    @Field(() => [NovelRatingWhereInput], {nullable:true})
    NOT?: Array<NovelRatingWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    votesCount?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    avgRating?: FloatFilter;

    @Field(() => IntFilter, {nullable:true})
    totalRating?: IntFilter;

    @Field(() => NovelRelationFilter, {nullable:true})
    novel?: NovelRelationFilter;
}
