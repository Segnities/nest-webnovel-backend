import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutCommendableTypeInput } from './review-create-without-commendable-type.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutCommendableTypeInput } from './review-create-or-connect-without-commendable-type.input';
import { ReviewUpsertWithWhereUniqueWithoutCommendableTypeInput } from './review-upsert-with-where-unique-without-commendable-type.input';
import { ReviewCreateManyCommendableTypeInputEnvelope } from './review-create-many-commendable-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateWithWhereUniqueWithoutCommendableTypeInput } from './review-update-with-where-unique-without-commendable-type.input';
import { ReviewUpdateManyWithWhereWithoutCommendableTypeInput } from './review-update-many-with-where-without-commendable-type.input';
import { ReviewScalarWhereInput } from './review-scalar-where.input';

@InputType()
export class ReviewUncheckedUpdateManyWithoutCommendableTypeNestedInput {

    @Field(() => [ReviewCreateWithoutCommendableTypeInput], {nullable:true})
    @Type(() => ReviewCreateWithoutCommendableTypeInput)
    create?: Array<ReviewCreateWithoutCommendableTypeInput>;

    @Field(() => [ReviewCreateOrConnectWithoutCommendableTypeInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutCommendableTypeInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutCommendableTypeInput>;

    @Field(() => [ReviewUpsertWithWhereUniqueWithoutCommendableTypeInput], {nullable:true})
    @Type(() => ReviewUpsertWithWhereUniqueWithoutCommendableTypeInput)
    upsert?: Array<ReviewUpsertWithWhereUniqueWithoutCommendableTypeInput>;

    @Field(() => ReviewCreateManyCommendableTypeInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyCommendableTypeInputEnvelope)
    createMany?: ReviewCreateManyCommendableTypeInputEnvelope;

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

    @Field(() => [ReviewUpdateWithWhereUniqueWithoutCommendableTypeInput], {nullable:true})
    @Type(() => ReviewUpdateWithWhereUniqueWithoutCommendableTypeInput)
    update?: Array<ReviewUpdateWithWhereUniqueWithoutCommendableTypeInput>;

    @Field(() => [ReviewUpdateManyWithWhereWithoutCommendableTypeInput], {nullable:true})
    @Type(() => ReviewUpdateManyWithWhereWithoutCommendableTypeInput)
    updateMany?: Array<ReviewUpdateManyWithWhereWithoutCommendableTypeInput>;

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    @Type(() => ReviewScalarWhereInput)
    deleteMany?: Array<ReviewScalarWhereInput>;
}
