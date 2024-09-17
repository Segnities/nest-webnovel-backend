import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelCollectionMappingUpdateManyMutationInput } from './novel-collection-mapping-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NovelCollectionMappingWhereInput } from './novel-collection-mapping-where.input';

@ArgsType()
export class UpdateManyNovelCollectionMappingArgs {

    @Field(() => NovelCollectionMappingUpdateManyMutationInput, {nullable:false})
    @Type(() => NovelCollectionMappingUpdateManyMutationInput)
    data!: NovelCollectionMappingUpdateManyMutationInput;

    @Field(() => NovelCollectionMappingWhereInput, {nullable:true})
    @Type(() => NovelCollectionMappingWhereInput)
    where?: NovelCollectionMappingWhereInput;
}
