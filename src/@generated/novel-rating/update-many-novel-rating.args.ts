import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelRatingUpdateManyMutationInput } from './novel-rating-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NovelRatingWhereInput } from './novel-rating-where.input';

@ArgsType()
export class UpdateManyNovelRatingArgs {

    @Field(() => NovelRatingUpdateManyMutationInput, {nullable:false})
    @Type(() => NovelRatingUpdateManyMutationInput)
    data!: NovelRatingUpdateManyMutationInput;

    @Field(() => NovelRatingWhereInput, {nullable:true})
    @Type(() => NovelRatingWhereInput)
    where?: NovelRatingWhereInput;
}
