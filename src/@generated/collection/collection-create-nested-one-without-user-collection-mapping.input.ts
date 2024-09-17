import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionCreateWithoutUserCollectionMappingInput } from './collection-create-without-user-collection-mapping.input';
import { Type } from 'class-transformer';
import { CollectionCreateOrConnectWithoutUserCollectionMappingInput } from './collection-create-or-connect-without-user-collection-mapping.input';
import { Prisma } from '@prisma/client';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';

@InputType()
export class CollectionCreateNestedOneWithoutUserCollectionMappingInput {

    @Field(() => CollectionCreateWithoutUserCollectionMappingInput, {nullable:true})
    @Type(() => CollectionCreateWithoutUserCollectionMappingInput)
    create?: CollectionCreateWithoutUserCollectionMappingInput;

    @Field(() => CollectionCreateOrConnectWithoutUserCollectionMappingInput, {nullable:true})
    @Type(() => CollectionCreateOrConnectWithoutUserCollectionMappingInput)
    connectOrCreate?: CollectionCreateOrConnectWithoutUserCollectionMappingInput;

    @Field(() => CollectionWhereUniqueInput, {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    connect?: Prisma.AtLeast<CollectionWhereUniqueInput, 'id' | 'title'>;
}
