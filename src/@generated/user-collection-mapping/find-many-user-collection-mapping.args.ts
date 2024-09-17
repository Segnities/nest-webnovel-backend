import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserCollectionMappingWhereInput } from './user-collection-mapping-where.input';
import { Type } from 'class-transformer';
import { UserCollectionMappingOrderByWithRelationInput } from './user-collection-mapping-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserCollectionMappingWhereUniqueInput } from './user-collection-mapping-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserCollectionMappingScalarFieldEnum } from './user-collection-mapping-scalar-field.enum';

@ArgsType()
export class FindManyUserCollectionMappingArgs {

    @Field(() => UserCollectionMappingWhereInput, {nullable:true})
    @Type(() => UserCollectionMappingWhereInput)
    where?: UserCollectionMappingWhereInput;

    @Field(() => [UserCollectionMappingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserCollectionMappingOrderByWithRelationInput>;

    @Field(() => UserCollectionMappingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserCollectionMappingWhereUniqueInput, 'id' | 'collectionId_userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserCollectionMappingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserCollectionMappingScalarFieldEnum>;
}
