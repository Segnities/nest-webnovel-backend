import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CommendableTypeUpdateOneRequiredWithoutNewsNestedInput } from '../commendable-type/commendable-type-update-one-required-without-news-nested.input';
import { UserUpdateOneRequiredWithoutNewsNestedInput } from '../user/user-update-one-required-without-news-nested.input';

@InputType()
export class NewsUpdateWithoutComplainTargetTypeInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    body?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    likes?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    views?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CommendableTypeUpdateOneRequiredWithoutNewsNestedInput, {nullable:true})
    commendableType?: CommendableTypeUpdateOneRequiredWithoutNewsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutNewsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutNewsNestedInput;
}
