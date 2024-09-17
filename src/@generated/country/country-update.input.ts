import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NovelUpdateManyWithoutCountryNestedInput } from '../novel/novel-update-many-without-country-nested.input';

@InputType()
export class CountryUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NovelUpdateManyWithoutCountryNestedInput, {nullable:true})
    novels?: NovelUpdateManyWithoutCountryNestedInput;
}
