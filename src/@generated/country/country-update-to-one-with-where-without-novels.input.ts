import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryWhereInput } from './country-where.input';
import { Type } from 'class-transformer';
import { CountryUpdateWithoutNovelsInput } from './country-update-without-novels.input';

@InputType()
export class CountryUpdateToOneWithWhereWithoutNovelsInput {

    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    where?: CountryWhereInput;

    @Field(() => CountryUpdateWithoutNovelsInput, {nullable:false})
    @Type(() => CountryUpdateWithoutNovelsInput)
    data!: CountryUpdateWithoutNovelsInput;
}
