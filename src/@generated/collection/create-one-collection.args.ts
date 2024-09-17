import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CollectionCreateInput } from './collection-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCollectionArgs {

    @Field(() => CollectionCreateInput, {nullable:false})
    @Type(() => CollectionCreateInput)
    data!: CollectionCreateInput;
}
