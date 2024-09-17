import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutGenresInput } from './novel-create-without-genres.input';

@InputType()
export class NovelCreateOrConnectWithoutGenresInput {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelCreateWithoutGenresInput, {nullable:false})
    @Type(() => NovelCreateWithoutGenresInput)
    create!: NovelCreateWithoutGenresInput;
}
