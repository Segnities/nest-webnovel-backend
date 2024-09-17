import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';
import { Type } from 'class-transformer';
import { CollectionCreateInput } from './collection-create.input';
import { CollectionUpdateInput } from './collection-update.input';

@ArgsType()
export class UpsertOneCollectionArgs {

    @Field(() => CollectionWhereUniqueInput, {nullable:false})
    @Type(() => CollectionWhereUniqueInput)
    where!: Prisma.AtLeast<CollectionWhereUniqueInput, 'id' | 'title'>;

    @Field(() => CollectionCreateInput, {nullable:false})
    @Type(() => CollectionCreateInput)
    create!: CollectionCreateInput;

    @Field(() => CollectionUpdateInput, {nullable:false})
    @Type(() => CollectionUpdateInput)
    update!: CollectionUpdateInput;
}
