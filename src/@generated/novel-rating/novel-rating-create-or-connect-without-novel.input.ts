import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelRatingWhereUniqueInput } from './novel-rating-where-unique.input';
import { Type } from 'class-transformer';
import { NovelRatingCreateWithoutNovelInput } from './novel-rating-create-without-novel.input';

@InputType()
export class NovelRatingCreateOrConnectWithoutNovelInput {

    @Field(() => NovelRatingWhereUniqueInput, {nullable:false})
    @Type(() => NovelRatingWhereUniqueInput)
    where!: Prisma.AtLeast<NovelRatingWhereUniqueInput, 'id' | 'novelId'>;

    @Field(() => NovelRatingCreateWithoutNovelInput, {nullable:false})
    @Type(() => NovelRatingCreateWithoutNovelInput)
    create!: NovelRatingCreateWithoutNovelInput;
}
