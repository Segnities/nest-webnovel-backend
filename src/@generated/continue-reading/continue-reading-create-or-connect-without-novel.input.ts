import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContinueReadingWhereUniqueInput } from './continue-reading-where-unique.input';
import { Type } from 'class-transformer';
import { ContinueReadingCreateWithoutNovelInput } from './continue-reading-create-without-novel.input';

@InputType()
export class ContinueReadingCreateOrConnectWithoutNovelInput {

    @Field(() => ContinueReadingWhereUniqueInput, {nullable:false})
    @Type(() => ContinueReadingWhereUniqueInput)
    where!: Prisma.AtLeast<ContinueReadingWhereUniqueInput, 'id'>;

    @Field(() => ContinueReadingCreateWithoutNovelInput, {nullable:false})
    @Type(() => ContinueReadingCreateWithoutNovelInput)
    create!: ContinueReadingCreateWithoutNovelInput;
}
