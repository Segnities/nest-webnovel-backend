import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CollectionUpdateManyMutationInput } from './collection-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CollectionWhereInput } from './collection-where.input';

@ArgsType()
export class UpdateManyCollectionArgs {

    @Field(() => CollectionUpdateManyMutationInput, {nullable:false})
    @Type(() => CollectionUpdateManyMutationInput)
    data!: CollectionUpdateManyMutationInput;

    @Field(() => CollectionWhereInput, {nullable:true})
    @Type(() => CollectionWhereInput)
    where?: CollectionWhereInput;
}
