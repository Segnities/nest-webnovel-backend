import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutGenresInput } from './novel-create-without-genres.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutGenresInput } from './novel-create-or-connect-without-genres.input';
import { NovelUpsertWithWhereUniqueWithoutGenresInput } from './novel-upsert-with-where-unique-without-genres.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { NovelUpdateWithWhereUniqueWithoutGenresInput } from './novel-update-with-where-unique-without-genres.input';
import { NovelUpdateManyWithWhereWithoutGenresInput } from './novel-update-many-with-where-without-genres.input';
import { NovelScalarWhereInput } from './novel-scalar-where.input';

@InputType()
export class NovelUncheckedUpdateManyWithoutGenresNestedInput {

    @Field(() => [NovelCreateWithoutGenresInput], {nullable:true})
    @Type(() => NovelCreateWithoutGenresInput)
    create?: Array<NovelCreateWithoutGenresInput>;

    @Field(() => [NovelCreateOrConnectWithoutGenresInput], {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutGenresInput)
    connectOrCreate?: Array<NovelCreateOrConnectWithoutGenresInput>;

    @Field(() => [NovelUpsertWithWhereUniqueWithoutGenresInput], {nullable:true})
    @Type(() => NovelUpsertWithWhereUniqueWithoutGenresInput)
    upsert?: Array<NovelUpsertWithWhereUniqueWithoutGenresInput>;

    @Field(() => [NovelWhereUniqueInput], {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    set?: Array<Prisma.AtLeast<NovelWhereUniqueInput, 'id'>>;

    @Field(() => [NovelWhereUniqueInput], {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<NovelWhereUniqueInput, 'id'>>;

    @Field(() => [NovelWhereUniqueInput], {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<NovelWhereUniqueInput, 'id'>>;

    @Field(() => [NovelWhereUniqueInput], {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NovelWhereUniqueInput, 'id'>>;

    @Field(() => [NovelUpdateWithWhereUniqueWithoutGenresInput], {nullable:true})
    @Type(() => NovelUpdateWithWhereUniqueWithoutGenresInput)
    update?: Array<NovelUpdateWithWhereUniqueWithoutGenresInput>;

    @Field(() => [NovelUpdateManyWithWhereWithoutGenresInput], {nullable:true})
    @Type(() => NovelUpdateManyWithWhereWithoutGenresInput)
    updateMany?: Array<NovelUpdateManyWithWhereWithoutGenresInput>;

    @Field(() => [NovelScalarWhereInput], {nullable:true})
    @Type(() => NovelScalarWhereInput)
    deleteMany?: Array<NovelScalarWhereInput>;
}
