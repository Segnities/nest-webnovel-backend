import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelCollectionMappingCreateInput } from './novel-collection-mapping-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNovelCollectionMappingArgs {

    @Field(() => NovelCollectionMappingCreateInput, {nullable:false})
    @Type(() => NovelCollectionMappingCreateInput)
    data!: NovelCollectionMappingCreateInput;
}
