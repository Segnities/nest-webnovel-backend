import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutNovelRatingInput } from './novel-create-without-novel-rating.input';

@InputType()
export class NovelCreateOrConnectWithoutNovelRatingInput {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelCreateWithoutNovelRatingInput, {nullable:false})
    @Type(() => NovelCreateWithoutNovelRatingInput)
    create!: NovelCreateWithoutNovelRatingInput;
}
