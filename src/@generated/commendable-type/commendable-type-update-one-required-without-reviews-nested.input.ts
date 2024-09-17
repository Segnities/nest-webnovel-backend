import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommendableTypeCreateWithoutReviewsInput } from './commendable-type-create-without-reviews.input';
import { Type } from 'class-transformer';
import { CommendableTypeCreateOrConnectWithoutReviewsInput } from './commendable-type-create-or-connect-without-reviews.input';
import { CommendableTypeUpsertWithoutReviewsInput } from './commendable-type-upsert-without-reviews.input';
import { Prisma } from '@prisma/client';
import { CommendableTypeWhereUniqueInput } from './commendable-type-where-unique.input';
import { CommendableTypeUpdateToOneWithWhereWithoutReviewsInput } from './commendable-type-update-to-one-with-where-without-reviews.input';

@InputType()
export class CommendableTypeUpdateOneRequiredWithoutReviewsNestedInput {

    @Field(() => CommendableTypeCreateWithoutReviewsInput, {nullable:true})
    @Type(() => CommendableTypeCreateWithoutReviewsInput)
    create?: CommendableTypeCreateWithoutReviewsInput;

    @Field(() => CommendableTypeCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => CommendableTypeCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: CommendableTypeCreateOrConnectWithoutReviewsInput;

    @Field(() => CommendableTypeUpsertWithoutReviewsInput, {nullable:true})
    @Type(() => CommendableTypeUpsertWithoutReviewsInput)
    upsert?: CommendableTypeUpsertWithoutReviewsInput;

    @Field(() => CommendableTypeWhereUniqueInput, {nullable:true})
    @Type(() => CommendableTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<CommendableTypeWhereUniqueInput, 'id'>;

    @Field(() => CommendableTypeUpdateToOneWithWhereWithoutReviewsInput, {nullable:true})
    @Type(() => CommendableTypeUpdateToOneWithWhereWithoutReviewsInput)
    update?: CommendableTypeUpdateToOneWithWhereWithoutReviewsInput;
}
