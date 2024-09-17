import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterWhereInput } from './chapter-where.input';
import { Type } from 'class-transformer';
import { ChapterUpdateWithoutContinueNovelInput } from './chapter-update-without-continue-novel.input';

@InputType()
export class ChapterUpdateToOneWithWhereWithoutContinueNovelInput {

    @Field(() => ChapterWhereInput, {nullable:true})
    @Type(() => ChapterWhereInput)
    where?: ChapterWhereInput;

    @Field(() => ChapterUpdateWithoutContinueNovelInput, {nullable:false})
    @Type(() => ChapterUpdateWithoutContinueNovelInput)
    data!: ChapterUpdateWithoutContinueNovelInput;
}
