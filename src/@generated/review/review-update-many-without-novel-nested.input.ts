import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutNovelInput } from './review-create-without-novel.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutNovelInput } from './review-create-or-connect-without-novel.input';
import { ReviewUpsertWithWhereUniqueWithoutNovelInput } from './review-upsert-with-where-unique-without-novel.input';
import { ReviewCreateManyNovelInputEnvelope } from './review-create-many-novel-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateWithWhereUniqueWithoutNovelInput } from './review-update-with-where-unique-without-novel.input';
import { ReviewUpdateManyWithWhereWithoutNovelInput } from './review-update-many-with-where-without-novel.input';
import { ReviewScalarWhereInput } from './review-scalar-where.input';

@InputType()
export class ReviewUpdateManyWithoutNovelNestedInput {

    @Field(() => [ReviewCreateWithoutNovelInput], {nullable:true})
    @Type(() => ReviewCreateWithoutNovelInput)
    create?: Array<ReviewCreateWithoutNovelInput>;

    @Field(() => [ReviewCreateOrConnectWithoutNovelInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutNovelInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutNovelInput>;

    @Field(() => [ReviewUpsertWithWhereUniqueWithoutNovelInput], {nullable:true})
    @Type(() => ReviewUpsertWithWhereUniqueWithoutNovelInput)
    upsert?: Array<ReviewUpsertWithWhereUniqueWithoutNovelInput>;

    @Field(() => ReviewCreateManyNovelInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyNovelInputEnvelope)
    createMany?: ReviewCreateManyNovelInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewUpdateWithWhereUniqueWithoutNovelInput], {nullable:true})
    @Type(() => ReviewUpdateWithWhereUniqueWithoutNovelInput)
    update?: Array<ReviewUpdateWithWhereUniqueWithoutNovelInput>;

    @Field(() => [ReviewUpdateManyWithWhereWithoutNovelInput], {nullable:true})
    @Type(() => ReviewUpdateManyWithWhereWithoutNovelInput)
    updateMany?: Array<ReviewUpdateManyWithWhereWithoutNovelInput>;

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    @Type(() => ReviewScalarWhereInput)
    deleteMany?: Array<ReviewScalarWhereInput>;
}
