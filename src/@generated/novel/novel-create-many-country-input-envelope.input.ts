import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateManyCountryInput } from './novel-create-many-country.input';
import { Type } from 'class-transformer';

@InputType()
export class NovelCreateManyCountryInputEnvelope {

    @Field(() => [NovelCreateManyCountryInput], {nullable:false})
    @Type(() => NovelCreateManyCountryInput)
    data!: Array<NovelCreateManyCountryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
