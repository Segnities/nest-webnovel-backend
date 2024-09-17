import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CollectionUpdateInput } from './collection-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CollectionWhereUniqueInput } from './collection-where-unique.input';

@ArgsType()
export class UpdateOneCollectionArgs {

    @Field(() => CollectionUpdateInput, {nullable:false})
    @Type(() => CollectionUpdateInput)
    data!: CollectionUpdateInput;

    @Field(() => CollectionWhereUniqueInput, {nullable:false})
    @Type(() => CollectionWhereUniqueInput)
    where!: Prisma.AtLeast<CollectionWhereUniqueInput, 'id' | 'title'>;
}
