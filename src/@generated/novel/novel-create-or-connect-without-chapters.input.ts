import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutChaptersInput } from './novel-create-without-chapters.input';

@InputType()
export class NovelCreateOrConnectWithoutChaptersInput {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelCreateWithoutChaptersInput, {nullable:false})
    @Type(() => NovelCreateWithoutChaptersInput)
    create!: NovelCreateWithoutChaptersInput;
}
