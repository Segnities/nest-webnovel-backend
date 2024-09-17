import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlternativeTitleWhereInput } from './alternative-title-where.input';

@InputType()
export class AlternativeTitleListRelationFilter {

    @Field(() => AlternativeTitleWhereInput, {nullable:true})
    every?: AlternativeTitleWhereInput;

    @Field(() => AlternativeTitleWhereInput, {nullable:true})
    some?: AlternativeTitleWhereInput;

    @Field(() => AlternativeTitleWhereInput, {nullable:true})
    none?: AlternativeTitleWhereInput;
}
