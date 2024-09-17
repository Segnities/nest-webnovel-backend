import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelRatingWhereUniqueInput } from './novel-rating-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneNovelRatingArgs {

    @Field(() => NovelRatingWhereUniqueInput, {nullable:false})
    @Type(() => NovelRatingWhereUniqueInput)
    where!: Prisma.AtLeast<NovelRatingWhereUniqueInput, 'id' | 'novelId'>;
}
