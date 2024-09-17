import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserCollectionMappingWhereUniqueInput } from './user-collection-mapping-where-unique.input';
import { Type } from 'class-transformer';
import { UserCollectionMappingUpdateWithoutCollectionInput } from './user-collection-mapping-update-without-collection.input';

@InputType()
export class UserCollectionMappingUpdateWithWhereUniqueWithoutCollectionInput {

    @Field(() => UserCollectionMappingWhereUniqueInput, {nullable:false})
    @Type(() => UserCollectionMappingWhereUniqueInput)
    where!: Prisma.AtLeast<UserCollectionMappingWhereUniqueInput, 'id' | 'collectionId_userId'>;

    @Field(() => UserCollectionMappingUpdateWithoutCollectionInput, {nullable:false})
    @Type(() => UserCollectionMappingUpdateWithoutCollectionInput)
    data!: UserCollectionMappingUpdateWithoutCollectionInput;
}
