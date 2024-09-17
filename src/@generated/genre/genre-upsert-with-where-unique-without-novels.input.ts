import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { Type } from 'class-transformer';
import { GenreUpdateWithoutNovelsInput } from './genre-update-without-novels.input';
import { GenreCreateWithoutNovelsInput } from './genre-create-without-novels.input';

@InputType()
export class GenreUpsertWithWhereUniqueWithoutNovelsInput {

    @Field(() => GenreWhereUniqueInput, {nullable:false})
    @Type(() => GenreWhereUniqueInput)
    where!: Prisma.AtLeast<GenreWhereUniqueInput, 'id' | 'title'>;

    @Field(() => GenreUpdateWithoutNovelsInput, {nullable:false})
    @Type(() => GenreUpdateWithoutNovelsInput)
    update!: GenreUpdateWithoutNovelsInput;

    @Field(() => GenreCreateWithoutNovelsInput, {nullable:false})
    @Type(() => GenreCreateWithoutNovelsInput)
    create!: GenreCreateWithoutNovelsInput;
}
