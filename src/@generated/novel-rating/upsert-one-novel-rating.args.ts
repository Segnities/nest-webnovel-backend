import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelRatingWhereUniqueInput } from './novel-rating-where-unique.input';
import { Type } from 'class-transformer';
import { NovelRatingCreateInput } from './novel-rating-create.input';
import { NovelRatingUpdateInput } from './novel-rating-update.input';

@ArgsType()
export class UpsertOneNovelRatingArgs {

    @Field(() => NovelRatingWhereUniqueInput, {nullable:false})
    @Type(() => NovelRatingWhereUniqueInput)
    where!: Prisma.AtLeast<NovelRatingWhereUniqueInput, 'id' | 'novelId'>;

    @Field(() => NovelRatingCreateInput, {nullable:false})
    @Type(() => NovelRatingCreateInput)
    create!: NovelRatingCreateInput;

    @Field(() => NovelRatingUpdateInput, {nullable:false})
    @Type(() => NovelRatingUpdateInput)
    update!: NovelRatingUpdateInput;
}
