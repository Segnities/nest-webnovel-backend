import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CollectionWhereInput } from './collection-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCollectionArgs {

    @Field(() => CollectionWhereInput, {nullable:true})
    @Type(() => CollectionWhereInput)
    where?: CollectionWhereInput;
}
