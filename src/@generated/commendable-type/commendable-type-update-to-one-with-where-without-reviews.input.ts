import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommendableTypeWhereInput } from './commendable-type-where.input';
import { Type } from 'class-transformer';
import { CommendableTypeUpdateWithoutReviewsInput } from './commendable-type-update-without-reviews.input';

@InputType()
export class CommendableTypeUpdateToOneWithWhereWithoutReviewsInput {

    @Field(() => CommendableTypeWhereInput, {nullable:true})
    @Type(() => CommendableTypeWhereInput)
    where?: CommendableTypeWhereInput;

    @Field(() => CommendableTypeUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => CommendableTypeUpdateWithoutReviewsInput)
    data!: CommendableTypeUpdateWithoutReviewsInput;
}
