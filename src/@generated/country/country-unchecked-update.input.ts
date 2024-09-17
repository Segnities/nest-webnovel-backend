import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NovelUncheckedUpdateManyWithoutCountryNestedInput } from '../novel/novel-unchecked-update-many-without-country-nested.input';

@InputType()
export class CountryUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NovelUncheckedUpdateManyWithoutCountryNestedInput, {nullable:true})
    novels?: NovelUncheckedUpdateManyWithoutCountryNestedInput;
}
