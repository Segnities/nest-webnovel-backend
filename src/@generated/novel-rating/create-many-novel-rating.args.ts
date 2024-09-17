import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelRatingCreateManyInput } from './novel-rating-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNovelRatingArgs {

    @Field(() => [NovelRatingCreateManyInput], {nullable:false})
    @Type(() => NovelRatingCreateManyInput)
    data!: Array<NovelRatingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
