import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChapterCreateManyInput } from './chapter-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyChapterArgs {

    @Field(() => [ChapterCreateManyInput], {nullable:false})
    @Type(() => ChapterCreateManyInput)
    data!: Array<ChapterCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
