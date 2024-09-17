import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutTagsInput } from './novel-create-without-tags.input';

@InputType()
export class NovelCreateOrConnectWithoutTagsInput {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelCreateWithoutTagsInput, {nullable:false})
    @Type(() => NovelCreateWithoutTagsInput)
    create!: NovelCreateWithoutTagsInput;
}
