import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelRatingCreateInput } from './novel-rating-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNovelRatingArgs {

    @Field(() => NovelRatingCreateInput, {nullable:false})
    @Type(() => NovelRatingCreateInput)
    data!: NovelRatingCreateInput;
}
