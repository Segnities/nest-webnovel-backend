import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NewsWhereInput } from './news-where.input';

@InputType()
export class NewsListRelationFilter {

    @Field(() => NewsWhereInput, {nullable:true})
    every?: NewsWhereInput;

    @Field(() => NewsWhereInput, {nullable:true})
    some?: NewsWhereInput;

    @Field(() => NewsWhereInput, {nullable:true})
    none?: NewsWhereInput;
}
