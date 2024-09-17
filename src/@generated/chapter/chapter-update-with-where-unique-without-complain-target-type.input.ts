import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChapterWhereUniqueInput } from './chapter-where-unique.input';
import { Type } from 'class-transformer';
import { ChapterUpdateWithoutComplainTargetTypeInput } from './chapter-update-without-complain-target-type.input';

@InputType()
export class ChapterUpdateWithWhereUniqueWithoutComplainTargetTypeInput {

    @Field(() => ChapterWhereUniqueInput, {nullable:false})
    @Type(() => ChapterWhereUniqueInput)
    where!: Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>;

    @Field(() => ChapterUpdateWithoutComplainTargetTypeInput, {nullable:false})
    @Type(() => ChapterUpdateWithoutComplainTargetTypeInput)
    data!: ChapterUpdateWithoutComplainTargetTypeInput;
}
