import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutChaptersInput } from './novel-create-without-chapters.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutChaptersInput } from './novel-create-or-connect-without-chapters.input';
import { NovelUpsertWithoutChaptersInput } from './novel-upsert-without-chapters.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { NovelUpdateToOneWithWhereWithoutChaptersInput } from './novel-update-to-one-with-where-without-chapters.input';

@InputType()
export class NovelUpdateOneRequiredWithoutChaptersNestedInput {

    @Field(() => NovelCreateWithoutChaptersInput, {nullable:true})
    @Type(() => NovelCreateWithoutChaptersInput)
    create?: NovelCreateWithoutChaptersInput;

    @Field(() => NovelCreateOrConnectWithoutChaptersInput, {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutChaptersInput)
    connectOrCreate?: NovelCreateOrConnectWithoutChaptersInput;

    @Field(() => NovelUpsertWithoutChaptersInput, {nullable:true})
    @Type(() => NovelUpsertWithoutChaptersInput)
    upsert?: NovelUpsertWithoutChaptersInput;

    @Field(() => NovelWhereUniqueInput, {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelUpdateToOneWithWhereWithoutChaptersInput, {nullable:true})
    @Type(() => NovelUpdateToOneWithWhereWithoutChaptersInput)
    update?: NovelUpdateToOneWithWhereWithoutChaptersInput;
}
