import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCollectionMappingWhereInput } from './novel-collection-mapping-where.input';

@InputType()
export class NovelCollectionMappingListRelationFilter {

    @Field(() => NovelCollectionMappingWhereInput, {nullable:true})
    every?: NovelCollectionMappingWhereInput;

    @Field(() => NovelCollectionMappingWhereInput, {nullable:true})
    some?: NovelCollectionMappingWhereInput;

    @Field(() => NovelCollectionMappingWhereInput, {nullable:true})
    none?: NovelCollectionMappingWhereInput;
}
