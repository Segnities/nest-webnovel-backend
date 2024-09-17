import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutContinueReadingInput } from './novel-create-without-continue-reading.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutContinueReadingInput } from './novel-create-or-connect-without-continue-reading.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';

@InputType()
export class NovelCreateNestedOneWithoutContinueReadingInput {

    @Field(() => NovelCreateWithoutContinueReadingInput, {nullable:true})
    @Type(() => NovelCreateWithoutContinueReadingInput)
    create?: NovelCreateWithoutContinueReadingInput;

    @Field(() => NovelCreateOrConnectWithoutContinueReadingInput, {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutContinueReadingInput)
    connectOrCreate?: NovelCreateOrConnectWithoutContinueReadingInput;

    @Field(() => NovelWhereUniqueInput, {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;
}
