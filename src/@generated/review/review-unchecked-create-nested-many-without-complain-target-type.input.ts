import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutComplainTargetTypeInput } from './review-create-without-complain-target-type.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutComplainTargetTypeInput } from './review-create-or-connect-without-complain-target-type.input';
import { ReviewCreateManyComplainTargetTypeInputEnvelope } from './review-create-many-complain-target-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewUncheckedCreateNestedManyWithoutComplainTargetTypeInput {

    @Field(() => [ReviewCreateWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => ReviewCreateWithoutComplainTargetTypeInput)
    create?: Array<ReviewCreateWithoutComplainTargetTypeInput>;

    @Field(() => [ReviewCreateOrConnectWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutComplainTargetTypeInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutComplainTargetTypeInput>;

    @Field(() => ReviewCreateManyComplainTargetTypeInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyComplainTargetTypeInputEnvelope)
    createMany?: ReviewCreateManyComplainTargetTypeInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
}
