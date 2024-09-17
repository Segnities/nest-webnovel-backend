import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutReviewsInput } from './novel-create-without-reviews.input';

@InputType()
export class NovelCreateOrConnectWithoutReviewsInput {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelCreateWithoutReviewsInput, {nullable:false})
    @Type(() => NovelCreateWithoutReviewsInput)
    create!: NovelCreateWithoutReviewsInput;
}
