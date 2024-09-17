import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCreateWithoutNovelsInput } from './country-create-without-novels.input';
import { Type } from 'class-transformer';
import { CountryCreateOrConnectWithoutNovelsInput } from './country-create-or-connect-without-novels.input';
import { CountryUpsertWithoutNovelsInput } from './country-upsert-without-novels.input';
import { Prisma } from '@prisma/client';
import { CountryWhereUniqueInput } from './country-where-unique.input';
import { CountryUpdateToOneWithWhereWithoutNovelsInput } from './country-update-to-one-with-where-without-novels.input';

@InputType()
export class CountryUpdateOneRequiredWithoutNovelsNestedInput {

    @Field(() => CountryCreateWithoutNovelsInput, {nullable:true})
    @Type(() => CountryCreateWithoutNovelsInput)
    create?: CountryCreateWithoutNovelsInput;

    @Field(() => CountryCreateOrConnectWithoutNovelsInput, {nullable:true})
    @Type(() => CountryCreateOrConnectWithoutNovelsInput)
    connectOrCreate?: CountryCreateOrConnectWithoutNovelsInput;

    @Field(() => CountryUpsertWithoutNovelsInput, {nullable:true})
    @Type(() => CountryUpsertWithoutNovelsInput)
    upsert?: CountryUpsertWithoutNovelsInput;

    @Field(() => CountryWhereUniqueInput, {nullable:true})
    @Type(() => CountryWhereUniqueInput)
    connect?: Prisma.AtLeast<CountryWhereUniqueInput, 'id' | 'title'>;

    @Field(() => CountryUpdateToOneWithWhereWithoutNovelsInput, {nullable:true})
    @Type(() => CountryUpdateToOneWithWhereWithoutNovelsInput)
    update?: CountryUpdateToOneWithWhereWithoutNovelsInput;
}
