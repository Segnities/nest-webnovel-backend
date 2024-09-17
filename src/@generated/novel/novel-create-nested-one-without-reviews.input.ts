import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutReviewsInput } from './novel-create-without-reviews.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutReviewsInput } from './novel-create-or-connect-without-reviews.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';

@InputType()
export class NovelCreateNestedOneWithoutReviewsInput {

    @Field(() => NovelCreateWithoutReviewsInput, {nullable:true})
    @Type(() => NovelCreateWithoutReviewsInput)
    create?: NovelCreateWithoutReviewsInput;

    @Field(() => NovelCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: NovelCreateOrConnectWithoutReviewsInput;

    @Field(() => NovelWhereUniqueInput, {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;
}
