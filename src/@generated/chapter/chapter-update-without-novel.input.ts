import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CommendableTypeUpdateOneRequiredWithoutChaptersNestedInput } from '../commendable-type/commendable-type-update-one-required-without-chapters-nested.input';
import { BookmarkUpdateManyWithoutChapterNestedInput } from '../bookmark/bookmark-update-many-without-chapter-nested.input';
import { ComplaintTargetTypeUpdateOneRequiredWithoutChapterNestedInput } from '../complaint-target-type/complaint-target-type-update-one-required-without-chapter-nested.input';
import { ContinueReadingUpdateManyWithoutLastChapterNestedInput } from '../continue-reading/continue-reading-update-many-without-last-chapter-nested.input';

@InputType()
export class ChapterUpdateWithoutNovelInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    likes?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    complaitTypeId?: IntFieldUpdateOperationsInput;

    @Field(() => CommendableTypeUpdateOneRequiredWithoutChaptersNestedInput, {nullable:true})
    commendableType?: CommendableTypeUpdateOneRequiredWithoutChaptersNestedInput;

    @Field(() => BookmarkUpdateManyWithoutChapterNestedInput, {nullable:true})
    bookmarks?: BookmarkUpdateManyWithoutChapterNestedInput;

    @Field(() => ComplaintTargetTypeUpdateOneRequiredWithoutChapterNestedInput, {nullable:true})
    complainTargetType?: ComplaintTargetTypeUpdateOneRequiredWithoutChapterNestedInput;

    @Field(() => ContinueReadingUpdateManyWithoutLastChapterNestedInput, {nullable:true})
    continueNovel?: ContinueReadingUpdateManyWithoutLastChapterNestedInput;
}
