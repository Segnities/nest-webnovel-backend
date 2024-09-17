import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class NovelCollectionMappingNovelIdUserCollectionIdCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    novelId!: number;

    @Field(() => Int, {nullable:false})
    userCollectionId!: number;
}
