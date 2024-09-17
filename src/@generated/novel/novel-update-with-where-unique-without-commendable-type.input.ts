import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelUpdateWithoutCommendableTypeInput } from './novel-update-without-commendable-type.input';

@InputType()
export class NovelUpdateWithWhereUniqueWithoutCommendableTypeInput {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelUpdateWithoutCommendableTypeInput, {nullable:false})
    @Type(() => NovelUpdateWithoutCommendableTypeInput)
    data!: NovelUpdateWithoutCommendableTypeInput;
}
