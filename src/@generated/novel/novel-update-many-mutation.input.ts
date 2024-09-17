import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumNovelStatusFieldUpdateOperationsInput } from '../prisma/enum-novel-status-field-update-operations.input';
import { EnumNovelTranslationStatusFieldUpdateOperationsInput } from '../prisma/enum-novel-translation-status-field-update-operations.input';
import { EnumNovelFormatFieldUpdateOperationsInput } from '../prisma/enum-novel-format-field-update-operations.input';

@InputType()
export class NovelUpdateManyMutationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    original_title?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    img?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAdult?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    releaseYear?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    coverImg?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    views?: IntFieldUpdateOperationsInput;

    @Field(() => EnumNovelStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumNovelStatusFieldUpdateOperationsInput;

    @Field(() => EnumNovelTranslationStatusFieldUpdateOperationsInput, {nullable:true})
    translationStatus?: EnumNovelTranslationStatusFieldUpdateOperationsInput;

    @Field(() => EnumNovelFormatFieldUpdateOperationsInput, {nullable:true})
    format?: EnumNovelFormatFieldUpdateOperationsInput;
}
