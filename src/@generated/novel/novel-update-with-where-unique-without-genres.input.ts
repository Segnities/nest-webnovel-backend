import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelUpdateWithoutGenresInput } from './novel-update-without-genres.input';

@InputType()
export class NovelUpdateWithWhereUniqueWithoutGenresInput {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelUpdateWithoutGenresInput, {nullable:false})
    @Type(() => NovelUpdateWithoutGenresInput)
    data!: NovelUpdateWithoutGenresInput;
}
