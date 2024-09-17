import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelUpdateWithoutNovelRatingInput } from './novel-update-without-novel-rating.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutNovelRatingInput } from './novel-create-without-novel-rating.input';
import { NovelWhereInput } from './novel-where.input';

@InputType()
export class NovelUpsertWithoutNovelRatingInput {

    @Field(() => NovelUpdateWithoutNovelRatingInput, {nullable:false})
    @Type(() => NovelUpdateWithoutNovelRatingInput)
    update!: NovelUpdateWithoutNovelRatingInput;

    @Field(() => NovelCreateWithoutNovelRatingInput, {nullable:false})
    @Type(() => NovelCreateWithoutNovelRatingInput)
    create!: NovelCreateWithoutNovelRatingInput;

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;
}
