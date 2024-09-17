import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCollectionMappingCreateManyNovelInput } from './novel-collection-mapping-create-many-novel.input';
import { Type } from 'class-transformer';

@InputType()
export class NovelCollectionMappingCreateManyNovelInputEnvelope {

    @Field(() => [NovelCollectionMappingCreateManyNovelInput], {nullable:false})
    @Type(() => NovelCollectionMappingCreateManyNovelInput)
    data!: Array<NovelCollectionMappingCreateManyNovelInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
