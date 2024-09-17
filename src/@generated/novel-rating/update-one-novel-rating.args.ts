import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelRatingUpdateInput } from './novel-rating-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { NovelRatingWhereUniqueInput } from './novel-rating-where-unique.input';

@ArgsType()
export class UpdateOneNovelRatingArgs {

    @Field(() => NovelRatingUpdateInput, {nullable:false})
    @Type(() => NovelRatingUpdateInput)
    data!: NovelRatingUpdateInput;

    @Field(() => NovelRatingWhereUniqueInput, {nullable:false})
    @Type(() => NovelRatingWhereUniqueInput)
    where!: Prisma.AtLeast<NovelRatingWhereUniqueInput, 'id' | 'novelId'>;
}
