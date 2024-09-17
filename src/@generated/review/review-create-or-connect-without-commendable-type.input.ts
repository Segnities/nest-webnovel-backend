import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewCreateWithoutCommendableTypeInput } from './review-create-without-commendable-type.input';

@InputType()
export class ReviewCreateOrConnectWithoutCommendableTypeInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => ReviewCreateWithoutCommendableTypeInput, {nullable:false})
    @Type(() => ReviewCreateWithoutCommendableTypeInput)
    create!: ReviewCreateWithoutCommendableTypeInput;
}
