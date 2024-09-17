import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateNestedManyWithoutCountryInput } from '../novel/novel-create-nested-many-without-country.input';

@InputType()
export class CountryCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => NovelCreateNestedManyWithoutCountryInput, {nullable:true})
    novels?: NovelCreateNestedManyWithoutCountryInput;
}
