import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCollectionMappingCreateManyUserCollectionMappingInput } from './novel-collection-mapping-create-many-user-collection-mapping.input';
import { Type } from 'class-transformer';

@InputType()
export class NovelCollectionMappingCreateManyUserCollectionMappingInputEnvelope {

    @Field(() => [NovelCollectionMappingCreateManyUserCollectionMappingInput], {nullable:false})
    @Type(() => NovelCollectionMappingCreateManyUserCollectionMappingInput)
    data!: Array<NovelCollectionMappingCreateManyUserCollectionMappingInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
