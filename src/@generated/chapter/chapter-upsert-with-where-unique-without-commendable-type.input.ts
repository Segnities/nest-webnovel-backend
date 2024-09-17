import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChapterWhereUniqueInput } from './chapter-where-unique.input';
import { Type } from 'class-transformer';
import { ChapterUpdateWithoutCommendableTypeInput } from './chapter-update-without-commendable-type.input';
import { ChapterCreateWithoutCommendableTypeInput } from './chapter-create-without-commendable-type.input';

@InputType()
export class ChapterUpsertWithWhereUniqueWithoutCommendableTypeInput {

    @Field(() => ChapterWhereUniqueInput, {nullable:false})
    @Type(() => ChapterWhereUniqueInput)
    where!: Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>;

    @Field(() => ChapterUpdateWithoutCommendableTypeInput, {nullable:false})
    @Type(() => ChapterUpdateWithoutCommendableTypeInput)
    update!: ChapterUpdateWithoutCommendableTypeInput;

    @Field(() => ChapterCreateWithoutCommendableTypeInput, {nullable:false})
    @Type(() => ChapterCreateWithoutCommendableTypeInput)
    create!: ChapterCreateWithoutCommendableTypeInput;
}
