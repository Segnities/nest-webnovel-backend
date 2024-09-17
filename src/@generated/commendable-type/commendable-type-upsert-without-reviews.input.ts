import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommendableTypeUpdateWithoutReviewsInput } from './commendable-type-update-without-reviews.input';
import { Type } from 'class-transformer';
import { CommendableTypeCreateWithoutReviewsInput } from './commendable-type-create-without-reviews.input';
import { CommendableTypeWhereInput } from './commendable-type-where.input';

@InputType()
export class CommendableTypeUpsertWithoutReviewsInput {

    @Field(() => CommendableTypeUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => CommendableTypeUpdateWithoutReviewsInput)
    update!: CommendableTypeUpdateWithoutReviewsInput;

    @Field(() => CommendableTypeCreateWithoutReviewsInput, {nullable:false})
    @Type(() => CommendableTypeCreateWithoutReviewsInput)
    create!: CommendableTypeCreateWithoutReviewsInput;

    @Field(() => CommendableTypeWhereInput, {nullable:true})
    @Type(() => CommendableTypeWhereInput)
    where?: CommendableTypeWhereInput;
}
