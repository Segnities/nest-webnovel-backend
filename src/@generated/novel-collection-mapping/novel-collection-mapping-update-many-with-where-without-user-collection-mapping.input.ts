import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCollectionMappingScalarWhereInput } from './novel-collection-mapping-scalar-where.input';
import { Type } from 'class-transformer';
import { NovelCollectionMappingUpdateManyMutationInput } from './novel-collection-mapping-update-many-mutation.input';

@InputType()
export class NovelCollectionMappingUpdateManyWithWhereWithoutUserCollectionMappingInput {

    @Field(() => NovelCollectionMappingScalarWhereInput, {nullable:false})
    @Type(() => NovelCollectionMappingScalarWhereInput)
    where!: NovelCollectionMappingScalarWhereInput;

    @Field(() => NovelCollectionMappingUpdateManyMutationInput, {nullable:false})
    @Type(() => NovelCollectionMappingUpdateManyMutationInput)
    data!: NovelCollectionMappingUpdateManyMutationInput;
}
