import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';
import { Type } from 'class-transformer';
import { CollectionCreateWithoutUserCollectionMappingInput } from './collection-create-without-user-collection-mapping.input';

@InputType()
export class CollectionCreateOrConnectWithoutUserCollectionMappingInput {

    @Field(() => CollectionWhereUniqueInput, {nullable:false})
    @Type(() => CollectionWhereUniqueInput)
    where!: Prisma.AtLeast<CollectionWhereUniqueInput, 'id' | 'title'>;

    @Field(() => CollectionCreateWithoutUserCollectionMappingInput, {nullable:false})
    @Type(() => CollectionCreateWithoutUserCollectionMappingInput)
    create!: CollectionCreateWithoutUserCollectionMappingInput;
}
