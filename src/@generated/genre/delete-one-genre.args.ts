import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneGenreArgs {

    @Field(() => GenreWhereUniqueInput, {nullable:false})
    @Type(() => GenreWhereUniqueInput)
    where!: Prisma.AtLeast<GenreWhereUniqueInput, 'id' | 'title'>;
}
