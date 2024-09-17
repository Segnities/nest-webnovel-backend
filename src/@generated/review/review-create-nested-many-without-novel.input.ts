import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutNovelInput } from './review-create-without-novel.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutNovelInput } from './review-create-or-connect-without-novel.input';
import { ReviewCreateManyNovelInputEnvelope } from './review-create-many-novel-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewCreateNestedManyWithoutNovelInput {

    @Field(() => [ReviewCreateWithoutNovelInput], {nullable:true})
    @Type(() => ReviewCreateWithoutNovelInput)
    create?: Array<ReviewCreateWithoutNovelInput>;

    @Field(() => [ReviewCreateOrConnectWithoutNovelInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutNovelInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutNovelInput>;

    @Field(() => ReviewCreateManyNovelInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyNovelInputEnvelope)
    createMany?: ReviewCreateManyNovelInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
}
