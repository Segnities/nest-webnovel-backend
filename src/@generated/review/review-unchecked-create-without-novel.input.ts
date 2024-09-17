import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NotificationUncheckedCreateNestedManyWithoutReviewInput } from '../notification/notification-unchecked-create-nested-many-without-review.input';

@InputType()
export class ReviewUncheckedCreateWithoutNovelInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    commendableTypeId!: number;

    @Field(() => Int, {nullable:false})
    complaintTargetId!: number;

    @Field(() => NotificationUncheckedCreateNestedManyWithoutReviewInput, {nullable:true})
    notifications?: NotificationUncheckedCreateNestedManyWithoutReviewInput;
}
