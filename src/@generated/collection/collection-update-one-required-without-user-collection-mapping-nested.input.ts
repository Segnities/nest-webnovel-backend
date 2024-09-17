import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionCreateWithoutUserCollectionMappingInput } from './collection-create-without-user-collection-mapping.input';
import { Type } from 'class-transformer';
import { CollectionCreateOrConnectWithoutUserCollectionMappingInput } from './collection-create-or-connect-without-user-collection-mapping.input';
import { CollectionUpsertWithoutUserCollectionMappingInput } from './collection-upsert-without-user-collection-mapping.input';
import { Prisma } from '@prisma/client';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';
import { CollectionUpdateToOneWithWhereWithoutUserCollectionMappingInput } from './collection-update-to-one-with-where-without-user-collection-mapping.input';

@InputType()
export class CollectionUpdateOneRequiredWithoutUserCollectionMappingNestedInput {

    @Field(() => CollectionCreateWithoutUserCollectionMappingInput, {nullable:true})
    @Type(() => CollectionCreateWithoutUserCollectionMappingInput)
    create?: CollectionCreateWithoutUserCollectionMappingInput;

    @Field(() => CollectionCreateOrConnectWithoutUserCollectionMappingInput, {nullable:true})
    @Type(() => CollectionCreateOrConnectWithoutUserCollectionMappingInput)
    connectOrCreate?: CollectionCreateOrConnectWithoutUserCollectionMappingInput;

    @Field(() => CollectionUpsertWithoutUserCollectionMappingInput, {nullable:true})
    @Type(() => CollectionUpsertWithoutUserCollectionMappingInput)
    upsert?: CollectionUpsertWithoutUserCollectionMappingInput;

    @Field(() => CollectionWhereUniqueInput, {nullable:true})
    @Type(() => CollectionWhereUniqueInput)
    connect?: Prisma.AtLeast<CollectionWhereUniqueInput, 'id' | 'title'>;

    @Field(() => CollectionUpdateToOneWithWhereWithoutUserCollectionMappingInput, {nullable:true})
    @Type(() => CollectionUpdateToOneWithWhereWithoutUserCollectionMappingInput)
    update?: CollectionUpdateToOneWithWhereWithoutUserCollectionMappingInput;
}
