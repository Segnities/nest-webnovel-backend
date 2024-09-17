import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelCollectionMappingCreateManyInput } from './novel-collection-mapping-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNovelCollectionMappingArgs {

    @Field(() => [NovelCollectionMappingCreateManyInput], {nullable:false})
    @Type(() => NovelCollectionMappingCreateManyInput)
    data!: Array<NovelCollectionMappingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
