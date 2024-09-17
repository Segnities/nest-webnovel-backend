import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { ChapterUpdateOneRequiredWithoutContinueNovelNestedInput } from '../chapter/chapter-update-one-required-without-continue-novel-nested.input';
import { NovelUpdateOneRequiredWithoutContinueReadingNestedInput } from '../novel/novel-update-one-required-without-continue-reading-nested.input';

@InputType()
export class ContinueReadingUpdateWithoutUserInput {

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    progressPercentage?: FloatFieldUpdateOperationsInput;

    @Field(() => ChapterUpdateOneRequiredWithoutContinueNovelNestedInput, {nullable:true})
    lastChapter?: ChapterUpdateOneRequiredWithoutContinueNovelNestedInput;

    @Field(() => NovelUpdateOneRequiredWithoutContinueReadingNestedInput, {nullable:true})
    novel?: NovelUpdateOneRequiredWithoutContinueReadingNestedInput;
}
