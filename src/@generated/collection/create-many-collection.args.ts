import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CollectionCreateManyInput } from './collection-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCollectionArgs {

    @Field(() => [CollectionCreateManyInput], {nullable:false})
    @Type(() => CollectionCreateManyInput)
    data!: Array<CollectionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
