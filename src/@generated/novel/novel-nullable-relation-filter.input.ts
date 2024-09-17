import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelWhereInput } from './novel-where.input';

@InputType()
export class NovelNullableRelationFilter {

    @Field(() => NovelWhereInput, {nullable:true})
    is?: NovelWhereInput;

    @Field(() => NovelWhereInput, {nullable:true})
    isNot?: NovelWhereInput;
}
