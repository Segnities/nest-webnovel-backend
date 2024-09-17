import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { Type } from 'class-transformer';
import { GenreUpdateWithoutNovelsInput } from './genre-update-without-novels.input';

@InputType()
export class GenreUpdateWithWhereUniqueWithoutNovelsInput {

    @Field(() => GenreWhereUniqueInput, {nullable:false})
    @Type(() => GenreWhereUniqueInput)
    where!: Prisma.AtLeast<GenreWhereUniqueInput, 'id' | 'title'>;

    @Field(() => GenreUpdateWithoutNovelsInput, {nullable:false})
    @Type(() => GenreUpdateWithoutNovelsInput)
    data!: GenreUpdateWithoutNovelsInput;
}
