import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenreUpdateInput } from './genre-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { GenreWhereUniqueInput } from './genre-where-unique.input';

@ArgsType()
export class UpdateOneGenreArgs {

    @Field(() => GenreUpdateInput, {nullable:false})
    @Type(() => GenreUpdateInput)
    data!: GenreUpdateInput;

    @Field(() => GenreWhereUniqueInput, {nullable:false})
    @Type(() => GenreWhereUniqueInput)
    where!: Prisma.AtLeast<GenreWhereUniqueInput, 'id' | 'title'>;
}
