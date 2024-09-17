import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelCollectionMappingWhereInput } from './novel-collection-mapping-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyNovelCollectionMappingArgs {

    @Field(() => NovelCollectionMappingWhereInput, {nullable:true})
    @Type(() => NovelCollectionMappingWhereInput)
    where?: NovelCollectionMappingWhereInput;
}
