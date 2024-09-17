import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ChapterCreateNestedOneWithoutContinueNovelInput } from '../chapter/chapter-create-nested-one-without-continue-novel.input';
import { NovelCreateNestedOneWithoutContinueReadingInput } from '../novel/novel-create-nested-one-without-continue-reading.input';

@InputType()
export class ContinueReadingCreateWithoutUserInput {

    @Field(() => Float, {nullable:false})
    progressPercentage!: number;

    @Field(() => ChapterCreateNestedOneWithoutContinueNovelInput, {nullable:false})
    lastChapter!: ChapterCreateNestedOneWithoutContinueNovelInput;

    @Field(() => NovelCreateNestedOneWithoutContinueReadingInput, {nullable:false})
    novel!: NovelCreateNestedOneWithoutContinueReadingInput;
}
