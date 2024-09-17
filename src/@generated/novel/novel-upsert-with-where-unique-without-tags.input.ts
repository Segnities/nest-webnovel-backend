import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelUpdateWithoutTagsInput } from './novel-update-without-tags.input';
import { NovelCreateWithoutTagsInput } from './novel-create-without-tags.input';

@InputType()
export class NovelUpsertWithWhereUniqueWithoutTagsInput {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelUpdateWithoutTagsInput, {nullable:false})
    @Type(() => NovelUpdateWithoutTagsInput)
    update!: NovelUpdateWithoutTagsInput;

    @Field(() => NovelCreateWithoutTagsInput, {nullable:false})
    @Type(() => NovelCreateWithoutTagsInput)
    create!: NovelCreateWithoutTagsInput;
}
