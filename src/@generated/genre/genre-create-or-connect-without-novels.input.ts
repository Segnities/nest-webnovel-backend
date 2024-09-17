import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { Type } from 'class-transformer';
import { GenreCreateWithoutNovelsInput } from './genre-create-without-novels.input';

@InputType()
export class GenreCreateOrConnectWithoutNovelsInput {

    @Field(() => GenreWhereUniqueInput, {nullable:false})
    @Type(() => GenreWhereUniqueInput)
    where!: Prisma.AtLeast<GenreWhereUniqueInput, 'id' | 'title'>;

    @Field(() => GenreCreateWithoutNovelsInput, {nullable:false})
    @Type(() => GenreCreateWithoutNovelsInput)
    create!: GenreCreateWithoutNovelsInput;
}
