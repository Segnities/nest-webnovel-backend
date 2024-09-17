import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutNovelInput } from './review-update-without-novel.input';
import { ReviewCreateWithoutNovelInput } from './review-create-without-novel.input';

@InputType()
export class ReviewUpsertWithWhereUniqueWithoutNovelInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => ReviewUpdateWithoutNovelInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutNovelInput)
    update!: ReviewUpdateWithoutNovelInput;

    @Field(() => ReviewCreateWithoutNovelInput, {nullable:false})
    @Type(() => ReviewCreateWithoutNovelInput)
    create!: ReviewCreateWithoutNovelInput;
}
