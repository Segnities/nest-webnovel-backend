import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelWhereInput } from './novel-where.input';
import { Type } from 'class-transformer';
import { NovelUpdateWithoutNovelRatingInput } from './novel-update-without-novel-rating.input';

@InputType()
export class NovelUpdateToOneWithWhereWithoutNovelRatingInput {

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;

    @Field(() => NovelUpdateWithoutNovelRatingInput, {nullable:false})
    @Type(() => NovelUpdateWithoutNovelRatingInput)
    data!: NovelUpdateWithoutNovelRatingInput;
}
