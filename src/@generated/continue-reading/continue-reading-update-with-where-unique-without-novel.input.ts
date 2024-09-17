import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContinueReadingWhereUniqueInput } from './continue-reading-where-unique.input';
import { Type } from 'class-transformer';
import { ContinueReadingUpdateWithoutNovelInput } from './continue-reading-update-without-novel.input';

@InputType()
export class ContinueReadingUpdateWithWhereUniqueWithoutNovelInput {

    @Field(() => ContinueReadingWhereUniqueInput, {nullable:false})
    @Type(() => ContinueReadingWhereUniqueInput)
    where!: Prisma.AtLeast<ContinueReadingWhereUniqueInput, 'id'>;

    @Field(() => ContinueReadingUpdateWithoutNovelInput, {nullable:false})
    @Type(() => ContinueReadingUpdateWithoutNovelInput)
    data!: ContinueReadingUpdateWithoutNovelInput;
}
