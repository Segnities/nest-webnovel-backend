import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutChaptersInput } from './novel-create-without-chapters.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutChaptersInput } from './novel-create-or-connect-without-chapters.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';

@InputType()
export class NovelCreateNestedOneWithoutChaptersInput {

    @Field(() => NovelCreateWithoutChaptersInput, {nullable:true})
    @Type(() => NovelCreateWithoutChaptersInput)
    create?: NovelCreateWithoutChaptersInput;

    @Field(() => NovelCreateOrConnectWithoutChaptersInput, {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutChaptersInput)
    connectOrCreate?: NovelCreateOrConnectWithoutChaptersInput;

    @Field(() => NovelWhereUniqueInput, {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;
}
