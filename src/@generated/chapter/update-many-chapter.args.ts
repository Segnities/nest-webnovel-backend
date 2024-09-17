import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChapterUpdateManyMutationInput } from './chapter-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ChapterWhereInput } from './chapter-where.input';

@ArgsType()
export class UpdateManyChapterArgs {

    @Field(() => ChapterUpdateManyMutationInput, {nullable:false})
    @Type(() => ChapterUpdateManyMutationInput)
    data!: ChapterUpdateManyMutationInput;

    @Field(() => ChapterWhereInput, {nullable:true})
    @Type(() => ChapterWhereInput)
    where?: ChapterWhereInput;
}
