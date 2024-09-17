import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreCreateWithoutNovelsInput } from './genre-create-without-novels.input';
import { Type } from 'class-transformer';
import { GenreCreateOrConnectWithoutNovelsInput } from './genre-create-or-connect-without-novels.input';
import { Prisma } from '@prisma/client';
import { GenreWhereUniqueInput } from './genre-where-unique.input';

@InputType()
export class GenreCreateNestedManyWithoutNovelsInput {

    @Field(() => [GenreCreateWithoutNovelsInput], {nullable:true})
    @Type(() => GenreCreateWithoutNovelsInput)
    create?: Array<GenreCreateWithoutNovelsInput>;

    @Field(() => [GenreCreateOrConnectWithoutNovelsInput], {nullable:true})
    @Type(() => GenreCreateOrConnectWithoutNovelsInput)
    connectOrCreate?: Array<GenreCreateOrConnectWithoutNovelsInput>;

    @Field(() => [GenreWhereUniqueInput], {nullable:true})
    @Type(() => GenreWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GenreWhereUniqueInput, 'id' | 'title'>>;
}
