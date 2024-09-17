import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelRatingWhereInput } from './novel-rating-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyNovelRatingArgs {

    @Field(() => NovelRatingWhereInput, {nullable:true})
    @Type(() => NovelRatingWhereInput)
    where?: NovelRatingWhereInput;
}
