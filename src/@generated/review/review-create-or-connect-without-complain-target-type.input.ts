import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutComplainTargetTypeInput } from './review-create-without-complain-target-type.input';

@InputType()
export class ReviewCreateOrConnectWithoutComplainTargetTypeInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => ReviewCreateWithoutComplainTargetTypeInput, {nullable:false})
    @Type(() => ReviewCreateWithoutComplainTargetTypeInput)
    create!: ReviewCreateWithoutComplainTargetTypeInput;
}
