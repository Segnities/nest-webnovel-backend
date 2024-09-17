import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutReviewsInput } from './novel-create-without-reviews.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutReviewsInput } from './novel-create-or-connect-without-reviews.input';
import { NovelUpsertWithoutReviewsInput } from './novel-upsert-without-reviews.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { NovelUpdateToOneWithWhereWithoutReviewsInput } from './novel-update-to-one-with-where-without-reviews.input';

@InputType()
export class NovelUpdateOneRequiredWithoutReviewsNestedInput {

    @Field(() => NovelCreateWithoutReviewsInput, {nullable:true})
    @Type(() => NovelCreateWithoutReviewsInput)
    create?: NovelCreateWithoutReviewsInput;

    @Field(() => NovelCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: NovelCreateOrConnectWithoutReviewsInput;

    @Field(() => NovelUpsertWithoutReviewsInput, {nullable:true})
    @Type(() => NovelUpsertWithoutReviewsInput)
    upsert?: NovelUpsertWithoutReviewsInput;

    @Field(() => NovelWhereUniqueInput, {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelUpdateToOneWithWhereWithoutReviewsInput, {nullable:true})
    @Type(() => NovelUpdateToOneWithWhereWithoutReviewsInput)
    update?: NovelUpdateToOneWithWhereWithoutReviewsInput;
}
