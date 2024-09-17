import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NovelUpdateOneRequiredWithoutNovelSubscriptionNestedInput } from '../novel/novel-update-one-required-without-novel-subscription-nested.input';

@InputType()
export class NovelSubscriptionUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NovelUpdateOneRequiredWithoutNovelSubscriptionNestedInput, {nullable:true})
    novel?: NovelUpdateOneRequiredWithoutNovelSubscriptionNestedInput;
}
