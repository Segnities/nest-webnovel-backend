import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChapterWhereUniqueInput } from './chapter-where-unique.input';
import { Type } from 'class-transformer';
import { ChapterCreateWithoutCommendableTypeInput } from './chapter-create-without-commendable-type.input';

@InputType()
export class ChapterCreateOrConnectWithoutCommendableTypeInput {

    @Field(() => ChapterWhereUniqueInput, {nullable:false})
    @Type(() => ChapterWhereUniqueInput)
    where!: Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>;

    @Field(() => ChapterCreateWithoutCommendableTypeInput, {nullable:false})
    @Type(() => ChapterCreateWithoutCommendableTypeInput)
    create!: ChapterCreateWithoutCommendableTypeInput;
}
