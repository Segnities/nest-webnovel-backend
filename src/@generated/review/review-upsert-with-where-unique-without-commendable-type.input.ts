import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutCommendableTypeInput } from './review-update-without-commendable-type.input';
import { ReviewCreateWithoutCommendableTypeInput } from './review-create-without-commendable-type.input';

@InputType()
export class ReviewUpsertWithWhereUniqueWithoutCommendableTypeInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => ReviewUpdateWithoutCommendableTypeInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutCommendableTypeInput)
    update!: ReviewUpdateWithoutCommendableTypeInput;

    @Field(() => ReviewCreateWithoutCommendableTypeInput, {nullable:false})
    @Type(() => ReviewCreateWithoutCommendableTypeInput)
    create!: ReviewCreateWithoutCommendableTypeInput;
}
