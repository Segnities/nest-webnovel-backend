import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { UserUpdateOneRequiredWithoutContinueReadingNestedInput } from '../user/user-update-one-required-without-continue-reading-nested.input';
import { NovelUpdateOneRequiredWithoutContinueReadingNestedInput } from '../novel/novel-update-one-required-without-continue-reading-nested.input';

@InputType()
export class ContinueReadingUpdateWithoutLastChapterInput {

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    progressPercentage?: FloatFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutContinueReadingNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutContinueReadingNestedInput;

    @Field(() => NovelUpdateOneRequiredWithoutContinueReadingNestedInput, {nullable:true})
    novel?: NovelUpdateOneRequiredWithoutContinueReadingNestedInput;
}
