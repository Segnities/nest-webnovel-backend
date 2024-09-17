import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChapterWhereUniqueInput } from './chapter-where-unique.input';
import { Type } from 'class-transformer';
import { ChapterCreateWithoutComplainTargetTypeInput } from './chapter-create-without-complain-target-type.input';

@InputType()
export class ChapterCreateOrConnectWithoutComplainTargetTypeInput {

    @Field(() => ChapterWhereUniqueInput, {nullable:false})
    @Type(() => ChapterWhereUniqueInput)
    where!: Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>;

    @Field(() => ChapterCreateWithoutComplainTargetTypeInput, {nullable:false})
    @Type(() => ChapterCreateWithoutComplainTargetTypeInput)
    create!: ChapterCreateWithoutComplainTargetTypeInput;
}
