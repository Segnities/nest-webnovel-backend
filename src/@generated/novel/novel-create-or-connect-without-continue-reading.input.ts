import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutContinueReadingInput } from './novel-create-without-continue-reading.input';

@InputType()
export class NovelCreateOrConnectWithoutContinueReadingInput {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelCreateWithoutContinueReadingInput, {nullable:false})
    @Type(() => NovelCreateWithoutContinueReadingInput)
    create!: NovelCreateWithoutContinueReadingInput;
}
