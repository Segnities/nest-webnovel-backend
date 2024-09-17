import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutComplainTargetTypeInput } from './review-create-without-complain-target-type.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutComplainTargetTypeInput } from './review-create-or-connect-without-complain-target-type.input';
import { ReviewUpsertWithWhereUniqueWithoutComplainTargetTypeInput } from './review-upsert-with-where-unique-without-complain-target-type.input';
import { ReviewCreateManyComplainTargetTypeInputEnvelope } from './review-create-many-complain-target-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateWithWhereUniqueWithoutComplainTargetTypeInput } from './review-update-with-where-unique-without-complain-target-type.input';
import { ReviewUpdateManyWithWhereWithoutComplainTargetTypeInput } from './review-update-many-with-where-without-complain-target-type.input';
import { ReviewScalarWhereInput } from './review-scalar-where.input';

@InputType()
export class ReviewUncheckedUpdateManyWithoutComplainTargetTypeNestedInput {

    @Field(() => [ReviewCreateWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => ReviewCreateWithoutComplainTargetTypeInput)
    create?: Array<ReviewCreateWithoutComplainTargetTypeInput>;

    @Field(() => [ReviewCreateOrConnectWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutComplainTargetTypeInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutComplainTargetTypeInput>;

    @Field(() => [ReviewUpsertWithWhereUniqueWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => ReviewUpsertWithWhereUniqueWithoutComplainTargetTypeInput)
    upsert?: Array<ReviewUpsertWithWhereUniqueWithoutComplainTargetTypeInput>;

    @Field(() => ReviewCreateManyComplainTargetTypeInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyComplainTargetTypeInputEnvelope)
    createMany?: ReviewCreateManyComplainTargetTypeInputEnvelope;

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

    @Field(() => [ReviewUpdateWithWhereUniqueWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => ReviewUpdateWithWhereUniqueWithoutComplainTargetTypeInput)
    update?: Array<ReviewUpdateWithWhereUniqueWithoutComplainTargetTypeInput>;

    @Field(() => [ReviewUpdateManyWithWhereWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => ReviewUpdateManyWithWhereWithoutComplainTargetTypeInput)
    updateMany?: Array<ReviewUpdateManyWithWhereWithoutComplainTargetTypeInput>;

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    @Type(() => ReviewScalarWhereInput)
    deleteMany?: Array<ReviewScalarWhereInput>;
}
