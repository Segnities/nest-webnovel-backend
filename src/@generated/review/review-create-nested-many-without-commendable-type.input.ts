import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutCommendableTypeInput } from './review-create-without-commendable-type.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutCommendableTypeInput } from './review-create-or-connect-without-commendable-type.input';
import { ReviewCreateManyCommendableTypeInputEnvelope } from './review-create-many-commendable-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewCreateNestedManyWithoutCommendableTypeInput {

    @Field(() => [ReviewCreateWithoutCommendableTypeInput], {nullable:true})
    @Type(() => ReviewCreateWithoutCommendableTypeInput)
    create?: Array<ReviewCreateWithoutCommendableTypeInput>;

    @Field(() => [ReviewCreateOrConnectWithoutCommendableTypeInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutCommendableTypeInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutCommendableTypeInput>;

    @Field(() => ReviewCreateManyCommendableTypeInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyCommendableTypeInputEnvelope)
    createMany?: ReviewCreateManyCommendableTypeInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
}
