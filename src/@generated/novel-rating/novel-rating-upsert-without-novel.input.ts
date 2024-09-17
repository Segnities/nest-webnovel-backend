import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelRatingUpdateWithoutNovelInput } from './novel-rating-update-without-novel.input';
import { Type } from 'class-transformer';
import { NovelRatingCreateWithoutNovelInput } from './novel-rating-create-without-novel.input';
import { NovelRatingWhereInput } from './novel-rating-where.input';

@InputType()
export class NovelRatingUpsertWithoutNovelInput {

    @Field(() => NovelRatingUpdateWithoutNovelInput, {nullable:false})
    @Type(() => NovelRatingUpdateWithoutNovelInput)
    update!: NovelRatingUpdateWithoutNovelInput;

    @Field(() => NovelRatingCreateWithoutNovelInput, {nullable:false})
    @Type(() => NovelRatingCreateWithoutNovelInput)
    create!: NovelRatingCreateWithoutNovelInput;

    @Field(() => NovelRatingWhereInput, {nullable:true})
    @Type(() => NovelRatingWhereInput)
    where?: NovelRatingWhereInput;
}
