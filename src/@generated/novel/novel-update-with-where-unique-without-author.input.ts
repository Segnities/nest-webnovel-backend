import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelUpdateWithoutAuthorInput } from './novel-update-without-author.input';

@InputType()
export class NovelUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => NovelUpdateWithoutAuthorInput)
    data!: NovelUpdateWithoutAuthorInput;
}
