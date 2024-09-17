import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelUpdateWithoutComplainTargetTypeInput } from './novel-update-without-complain-target-type.input';

@InputType()
export class NovelUpdateWithWhereUniqueWithoutComplainTargetTypeInput {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelUpdateWithoutComplainTargetTypeInput, {nullable:false})
    @Type(() => NovelUpdateWithoutComplainTargetTypeInput)
    data!: NovelUpdateWithoutComplainTargetTypeInput;
}
