import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AlternativeTitleWhereUniqueInput } from './alternative-title-where-unique.input';
import { Type } from 'class-transformer';
import { AlternativeTitleUpdateWithoutNovelInput } from './alternative-title-update-without-novel.input';

@InputType()
export class AlternativeTitleUpdateWithWhereUniqueWithoutNovelInput {

    @Field(() => AlternativeTitleWhereUniqueInput, {nullable:false})
    @Type(() => AlternativeTitleWhereUniqueInput)
    where!: Prisma.AtLeast<AlternativeTitleWhereUniqueInput, 'id'>;

    @Field(() => AlternativeTitleUpdateWithoutNovelInput, {nullable:false})
    @Type(() => AlternativeTitleUpdateWithoutNovelInput)
    data!: AlternativeTitleUpdateWithoutNovelInput;
}
