import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommendableTypeWhereUniqueInput } from './commendable-type-where-unique.input';
import { Type } from 'class-transformer';
import { CommendableTypeCreateWithoutReviewsInput } from './commendable-type-create-without-reviews.input';

@InputType()
export class CommendableTypeCreateOrConnectWithoutReviewsInput {

    @Field(() => CommendableTypeWhereUniqueInput, {nullable:false})
    @Type(() => CommendableTypeWhereUniqueInput)
    where!: Prisma.AtLeast<CommendableTypeWhereUniqueInput, 'id'>;

    @Field(() => CommendableTypeCreateWithoutReviewsInput, {nullable:false})
    @Type(() => CommendableTypeCreateWithoutReviewsInput)
    create!: CommendableTypeCreateWithoutReviewsInput;
}
