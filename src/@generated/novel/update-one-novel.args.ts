import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelUpdateInput } from './novel-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';

@ArgsType()
export class UpdateOneNovelArgs {

    @Field(() => NovelUpdateInput, {nullable:false})
    @Type(() => NovelUpdateInput)
    data!: NovelUpdateInput;

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;
}
