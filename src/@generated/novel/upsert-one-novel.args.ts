import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelCreateInput } from './novel-create.input';
import { NovelUpdateInput } from './novel-update.input';

@ArgsType()
export class UpsertOneNovelArgs {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelCreateInput, {nullable:false})
    @Type(() => NovelCreateInput)
    create!: NovelCreateInput;

    @Field(() => NovelUpdateInput, {nullable:false})
    @Type(() => NovelUpdateInput)
    update!: NovelUpdateInput;
}
