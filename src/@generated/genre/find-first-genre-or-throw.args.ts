import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenreWhereInput } from './genre-where.input';
import { Type } from 'class-transformer';
import { GenreOrderByWithRelationInput } from './genre-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GenreScalarFieldEnum } from './genre-scalar-field.enum';

@ArgsType()
export class FindFirstGenreOrThrowArgs {

    @Field(() => GenreWhereInput, {nullable:true})
    @Type(() => GenreWhereInput)
    where?: GenreWhereInput;

    @Field(() => [GenreOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GenreOrderByWithRelationInput>;

    @Field(() => GenreWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<GenreWhereUniqueInput, 'id' | 'title'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GenreScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GenreScalarFieldEnum>;
}
