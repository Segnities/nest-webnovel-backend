import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutCommendableTypeInput } from './review-update-without-commendable-type.input';

@InputType()
export class ReviewUpdateWithWhereUniqueWithoutCommendableTypeInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => ReviewUpdateWithoutCommendableTypeInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutCommendableTypeInput)
    data!: ReviewUpdateWithoutCommendableTypeInput;
}
