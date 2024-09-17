import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionWhereInput } from './collection-where.input';
import { Type } from 'class-transformer';
import { CollectionUpdateWithoutUserCollectionMappingInput } from './collection-update-without-user-collection-mapping.input';

@InputType()
export class CollectionUpdateToOneWithWhereWithoutUserCollectionMappingInput {

    @Field(() => CollectionWhereInput, {nullable:true})
    @Type(() => CollectionWhereInput)
    where?: CollectionWhereInput;

    @Field(() => CollectionUpdateWithoutUserCollectionMappingInput, {nullable:false})
    @Type(() => CollectionUpdateWithoutUserCollectionMappingInput)
    data!: CollectionUpdateWithoutUserCollectionMappingInput;
}
