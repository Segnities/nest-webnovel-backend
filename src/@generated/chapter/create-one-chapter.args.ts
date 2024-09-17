import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChapterCreateInput } from './chapter-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneChapterArgs {

    @Field(() => ChapterCreateInput, {nullable:false})
    @Type(() => ChapterCreateInput)
    data!: ChapterCreateInput;
}
