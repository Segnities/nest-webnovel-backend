import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreCreateWithoutNovelsInput } from './genre-create-without-novels.input';
import { Type } from 'class-transformer';
import { GenreCreateOrConnectWithoutNovelsInput } from './genre-create-or-connect-without-novels.input';
import { GenreUpsertWithWhereUniqueWithoutNovelsInput } from './genre-upsert-with-where-unique-without-novels.input';
import { Prisma } from '@prisma/client';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { GenreUpdateWithWhereUniqueWithoutNovelsInput } from './genre-update-with-where-unique-without-novels.input';
import { GenreUpdateManyWithWhereWithoutNovelsInput } from './genre-update-many-with-where-without-novels.input';
import { GenreScalarWhereInput } from './genre-scalar-where.input';

@InputType()
export class GenreUncheckedUpdateManyWithoutNovelsNestedInput {

    @Field(() => [GenreCreateWithoutNovelsInput], {nullable:true})
    @Type(() => GenreCreateWithoutNovelsInput)
    create?: Array<GenreCreateWithoutNovelsInput>;

    @Field(() => [GenreCreateOrConnectWithoutNovelsInput], {nullable:true})
    @Type(() => GenreCreateOrConnectWithoutNovelsInput)
    connectOrCreate?: Array<GenreCreateOrConnectWithoutNovelsInput>;

    @Field(() => [GenreUpsertWithWhereUniqueWithoutNovelsInput], {nullable:true})
    @Type(() => GenreUpsertWithWhereUniqueWithoutNovelsInput)
    upsert?: Array<GenreUpsertWithWhereUniqueWithoutNovelsInput>;

    @Field(() => [GenreWhereUniqueInput], {nullable:true})
    @Type(() => GenreWhereUniqueInput)
    set?: Array<Prisma.AtLeast<GenreWhereUniqueInput, 'id' | 'title'>>;

    @Field(() => [GenreWhereUniqueInput], {nullable:true})
    @Type(() => GenreWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<GenreWhereUniqueInput, 'id' | 'title'>>;

    @Field(() => [GenreWhereUniqueInput], {nullable:true})
    @Type(() => GenreWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<GenreWhereUniqueInput, 'id' | 'title'>>;

    @Field(() => [GenreWhereUniqueInput], {nullable:true})
    @Type(() => GenreWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<GenreWhereUniqueInput, 'id' | 'title'>>;

    @Field(() => [GenreUpdateWithWhereUniqueWithoutNovelsInput], {nullable:true})
    @Type(() => GenreUpdateWithWhereUniqueWithoutNovelsInput)
    update?: Array<GenreUpdateWithWhereUniqueWithoutNovelsInput>;

    @Field(() => [GenreUpdateManyWithWhereWithoutNovelsInput], {nullable:true})
    @Type(() => GenreUpdateManyWithWhereWithoutNovelsInput)
    updateMany?: Array<GenreUpdateManyWithWhereWithoutNovelsInput>;

    @Field(() => [GenreScalarWhereInput], {nullable:true})
    @Type(() => GenreScalarWhereInput)
    deleteMany?: Array<GenreScalarWhereInput>;
}
