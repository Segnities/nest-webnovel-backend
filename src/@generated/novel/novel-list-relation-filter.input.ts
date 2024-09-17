import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelWhereInput } from './novel-where.input';

@InputType()
export class NovelListRelationFilter {

    @Field(() => NovelWhereInput, {nullable:true})
    every?: NovelWhereInput;

    @Field(() => NovelWhereInput, {nullable:true})
    some?: NovelWhereInput;

    @Field(() => NovelWhereInput, {nullable:true})
    none?: NovelWhereInput;
}
