import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutNovelInput } from './review-create-without-novel.input';

@InputType()
export class ReviewCreateOrConnectWithoutNovelInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => ReviewCreateWithoutNovelInput, {nullable:false})
    @Type(() => ReviewCreateWithoutNovelInput)
    create!: ReviewCreateWithoutNovelInput;
}
