import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelUpdateWithoutTagsInput } from './novel-update-without-tags.input';

@InputType()
export class NovelUpdateWithWhereUniqueWithoutTagsInput {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelUpdateWithoutTagsInput, {nullable:false})
    @Type(() => NovelUpdateWithoutTagsInput)
    data!: NovelUpdateWithoutTagsInput;
}
