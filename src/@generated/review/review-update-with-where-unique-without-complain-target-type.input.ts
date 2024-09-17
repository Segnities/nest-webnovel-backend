import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutComplainTargetTypeInput } from './review-update-without-complain-target-type.input';

@InputType()
export class ReviewUpdateWithWhereUniqueWithoutComplainTargetTypeInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => ReviewUpdateWithoutComplainTargetTypeInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutComplainTargetTypeInput)
    data!: ReviewUpdateWithoutComplainTargetTypeInput;
}
