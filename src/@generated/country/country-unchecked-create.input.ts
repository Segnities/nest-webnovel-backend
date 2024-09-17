import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NovelUncheckedCreateNestedManyWithoutCountryInput } from '../novel/novel-unchecked-create-nested-many-without-country.input';

@InputType()
export class CountryUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => NovelUncheckedCreateNestedManyWithoutCountryInput, {nullable:true})
    novels?: NovelUncheckedCreateNestedManyWithoutCountryInput;
}
