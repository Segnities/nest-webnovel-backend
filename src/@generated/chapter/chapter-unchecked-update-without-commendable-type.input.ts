import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BookmarkUncheckedUpdateManyWithoutChapterNestedInput } from '../bookmark/bookmark-unchecked-update-many-without-chapter-nested.input';
import { ContinueReadingUncheckedUpdateManyWithoutLastChapterNestedInput } from '../continue-reading/continue-reading-unchecked-update-many-without-last-chapter-nested.input';

@InputType()
export class ChapterUncheckedUpdateWithoutCommendableTypeInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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
    novelId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    complaitTypeId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    complaintTargetId?: IntFieldUpdateOperationsInput;

    @Field(() => BookmarkUncheckedUpdateManyWithoutChapterNestedInput, {nullable:true})
    bookmarks?: BookmarkUncheckedUpdateManyWithoutChapterNestedInput;

    @Field(() => ContinueReadingUncheckedUpdateManyWithoutLastChapterNestedInput, {nullable:true})
    continueNovel?: ContinueReadingUncheckedUpdateManyWithoutLastChapterNestedInput;
}
