import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CountryCreateWithoutNovelsInput {

    @Field(() => String, {nullable:false})
    title!: string;
}
