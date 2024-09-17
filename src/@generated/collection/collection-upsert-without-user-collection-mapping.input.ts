import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionUpdateWithoutUserCollectionMappingInput } from './collection-update-without-user-collection-mapping.input';
import { Type } from 'class-transformer';
import { CollectionCreateWithoutUserCollectionMappingInput } from './collection-create-without-user-collection-mapping.input';
import { CollectionWhereInput } from './collection-where.input';

@InputType()
export class CollectionUpsertWithoutUserCollectionMappingInput {

    @Field(() => CollectionUpdateWithoutUserCollectionMappingInput, {nullable:false})
    @Type(() => CollectionUpdateWithoutUserCollectionMappingInput)
    update!: CollectionUpdateWithoutUserCollectionMappingInput;

    @Field(() => CollectionCreateWithoutUserCollectionMappingInput, {nullable:false})
    @Type(() => CollectionCreateWithoutUserCollectionMappingInput)
    create!: CollectionCreateWithoutUserCollectionMappingInput;

    @Field(() => CollectionWhereInput, {nullable:true})
    @Type(() => CollectionWhereInput)
    where?: CollectionWhereInput;
}
