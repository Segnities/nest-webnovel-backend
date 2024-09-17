import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutGenresInput } from './novel-create-without-genres.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutGenresInput } from './novel-create-or-connect-without-genres.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';

@InputType()
export class NovelUncheckedCreateNestedManyWithoutGenresInput {

    @Field(() => [NovelCreateWithoutGenresInput], {nullable:true})
    @Type(() => NovelCreateWithoutGenresInput)
    create?: Array<NovelCreateWithoutGenresInput>;

    @Field(() => [NovelCreateOrConnectWithoutGenresInput], {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutGenresInput)
    connectOrCreate?: Array<NovelCreateOrConnectWithoutGenresInput>;

    @Field(() => [NovelWhereUniqueInput], {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NovelWhereUniqueInput, 'id'>>;
}
