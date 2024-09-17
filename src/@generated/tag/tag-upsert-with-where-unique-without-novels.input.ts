import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagUpdateWithoutNovelsInput } from './tag-update-without-novels.input';
import { TagCreateWithoutNovelsInput } from './tag-create-without-novels.input';

@InputType()
export class TagUpsertWithWhereUniqueWithoutNovelsInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'title'>;

    @Field(() => TagUpdateWithoutNovelsInput, {nullable:false})
    @Type(() => TagUpdateWithoutNovelsInput)
    update!: TagUpdateWithoutNovelsInput;

    @Field(() => TagCreateWithoutNovelsInput, {nullable:false})
    @Type(() => TagCreateWithoutNovelsInput)
    create!: TagCreateWithoutNovelsInput;
}
