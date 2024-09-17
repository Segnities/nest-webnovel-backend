import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { NovelRelationFilter } from '../novel/novel-relation-filter.input';

@InputType()
export class NovelRatingWhereInput {

    @Field(() => [NovelRatingWhereInput], {nullable:true})
    AND?: Array<NovelRatingWhereInput>;

    @Field(() => [NovelRatingWhereInput], {nullable:true})
    OR?: Array<NovelRatingWhereInput>;

    @Field(() => [NovelRatingWhereInput], {nullable:true})
    NOT?: Array<NovelRatingWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    votesCount?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    avgRating?: FloatFilter;

    @Field(() => IntFilter, {nullable:true})
    totalRating?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    novelId?: IntFilter;

    @Field(() => NovelRelationFilter, {nullable:true})
    novel?: NovelRelationFilter;
}
