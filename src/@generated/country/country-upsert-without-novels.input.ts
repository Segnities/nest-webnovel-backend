import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryUpdateWithoutNovelsInput } from './country-update-without-novels.input';
import { Type } from 'class-transformer';
import { CountryCreateWithoutNovelsInput } from './country-create-without-novels.input';
import { CountryWhereInput } from './country-where.input';

@InputType()
export class CountryUpsertWithoutNovelsInput {

    @Field(() => CountryUpdateWithoutNovelsInput, {nullable:false})
    @Type(() => CountryUpdateWithoutNovelsInput)
    update!: CountryUpdateWithoutNovelsInput;

    @Field(() => CountryCreateWithoutNovelsInput, {nullable:false})
    @Type(() => CountryCreateWithoutNovelsInput)
    create!: CountryCreateWithoutNovelsInput;

    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    where?: CountryWhereInput;
}
