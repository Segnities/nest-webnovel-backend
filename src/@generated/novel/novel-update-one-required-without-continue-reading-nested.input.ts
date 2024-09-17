import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutContinueReadingInput } from './novel-create-without-continue-reading.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutContinueReadingInput } from './novel-create-or-connect-without-continue-reading.input';
import { NovelUpsertWithoutContinueReadingInput } from './novel-upsert-without-continue-reading.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { NovelUpdateToOneWithWhereWithoutContinueReadingInput } from './novel-update-to-one-with-where-without-continue-reading.input';

@InputType()
export class NovelUpdateOneRequiredWithoutContinueReadingNestedInput {

    @Field(() => NovelCreateWithoutContinueReadingInput, {nullable:true})
    @Type(() => NovelCreateWithoutContinueReadingInput)
    create?: NovelCreateWithoutContinueReadingInput;

    @Field(() => NovelCreateOrConnectWithoutContinueReadingInput, {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutContinueReadingInput)
    connectOrCreate?: NovelCreateOrConnectWithoutContinueReadingInput;

    @Field(() => NovelUpsertWithoutContinueReadingInput, {nullable:true})
    @Type(() => NovelUpsertWithoutContinueReadingInput)
    upsert?: NovelUpsertWithoutContinueReadingInput;

    @Field(() => NovelWhereUniqueInput, {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelUpdateToOneWithWhereWithoutContinueReadingInput, {nullable:true})
    @Type(() => NovelUpdateToOneWithWhereWithoutContinueReadingInput)
    update?: NovelUpdateToOneWithWhereWithoutContinueReadingInput;
}
