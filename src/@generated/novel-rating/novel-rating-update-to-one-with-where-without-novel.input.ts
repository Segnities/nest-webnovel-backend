import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelRatingWhereInput } from './novel-rating-where.input';
import { Type } from 'class-transformer';
import { NovelRatingUpdateWithoutNovelInput } from './novel-rating-update-without-novel.input';

@InputType()
export class NovelRatingUpdateToOneWithWhereWithoutNovelInput {

    @Field(() => NovelRatingWhereInput, {nullable:true})
    @Type(() => NovelRatingWhereInput)
    where?: NovelRatingWhereInput;

    @Field(() => NovelRatingUpdateWithoutNovelInput, {nullable:false})
    @Type(() => NovelRatingUpdateWithoutNovelInput)
    data!: NovelRatingUpdateWithoutNovelInput;
}
