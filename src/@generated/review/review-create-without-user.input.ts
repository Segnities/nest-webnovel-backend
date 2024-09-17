import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NovelCreateNestedOneWithoutReviewsInput } from '../novel/novel-create-nested-one-without-reviews.input';
import { CommendableTypeCreateNestedOneWithoutReviewsInput } from '../commendable-type/commendable-type-create-nested-one-without-reviews.input';
import { ComplaintTargetTypeCreateNestedOneWithoutReviewsInput } from '../complaint-target-type/complaint-target-type-create-nested-one-without-reviews.input';
import { NotificationCreateNestedManyWithoutReviewInput } from '../notification/notification-create-nested-many-without-review.input';

@InputType()
export class ReviewCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    likes!: number;

    @Field(() => Int, {nullable:false})
    views!: number;

    @Field(() => NovelCreateNestedOneWithoutReviewsInput, {nullable:false})
    novel!: NovelCreateNestedOneWithoutReviewsInput;

    @Field(() => CommendableTypeCreateNestedOneWithoutReviewsInput, {nullable:false})
    commendableType!: CommendableTypeCreateNestedOneWithoutReviewsInput;

    @Field(() => ComplaintTargetTypeCreateNestedOneWithoutReviewsInput, {nullable:false})
    complainTargetType!: ComplaintTargetTypeCreateNestedOneWithoutReviewsInput;

    @Field(() => NotificationCreateNestedManyWithoutReviewInput, {nullable:true})
    notifications?: NotificationCreateNestedManyWithoutReviewInput;
}
