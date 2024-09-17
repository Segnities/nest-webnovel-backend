import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCollectionMappingCreateWithoutNovelCollectionMappingInput } from './user-collection-mapping-create-without-novel-collection-mapping.input';
import { Type } from 'class-transformer';
import { UserCollectionMappingCreateOrConnectWithoutNovelCollectionMappingInput } from './user-collection-mapping-create-or-connect-without-novel-collection-mapping.input';
import { UserCollectionMappingUpsertWithoutNovelCollectionMappingInput } from './user-collection-mapping-upsert-without-novel-collection-mapping.input';
import { Prisma } from '@prisma/client';
import { UserCollectionMappingWhereUniqueInput } from './user-collection-mapping-where-unique.input';
import { UserCollectionMappingUpdateToOneWithWhereWithoutNovelCollectionMappingInput } from './user-collection-mapping-update-to-one-with-where-without-novel-collection-mapping.input';

@InputType()
export class UserCollectionMappingUpdateOneRequiredWithoutNovelCollectionMappingNestedInput {

    @Field(() => UserCollectionMappingCreateWithoutNovelCollectionMappingInput, {nullable:true})
    @Type(() => UserCollectionMappingCreateWithoutNovelCollectionMappingInput)
    create?: UserCollectionMappingCreateWithoutNovelCollectionMappingInput;

    @Field(() => UserCollectionMappingCreateOrConnectWithoutNovelCollectionMappingInput, {nullable:true})
    @Type(() => UserCollectionMappingCreateOrConnectWithoutNovelCollectionMappingInput)
    connectOrCreate?: UserCollectionMappingCreateOrConnectWithoutNovelCollectionMappingInput;

    @Field(() => UserCollectionMappingUpsertWithoutNovelCollectionMappingInput, {nullable:true})
    @Type(() => UserCollectionMappingUpsertWithoutNovelCollectionMappingInput)
    upsert?: UserCollectionMappingUpsertWithoutNovelCollectionMappingInput;

    @Field(() => UserCollectionMappingWhereUniqueInput, {nullable:true})
    @Type(() => UserCollectionMappingWhereUniqueInput)
    connect?: Prisma.AtLeast<UserCollectionMappingWhereUniqueInput, 'id' | 'collectionId_userId'>;

    @Field(() => UserCollectionMappingUpdateToOneWithWhereWithoutNovelCollectionMappingInput, {nullable:true})
    @Type(() => UserCollectionMappingUpdateToOneWithWhereWithoutNovelCollectionMappingInput)
    update?: UserCollectionMappingUpdateToOneWithWhereWithoutNovelCollectionMappingInput;
}
