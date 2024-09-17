import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRatingCreateWithoutUserInput } from './user-rating-create-without-user.input';
import { Type } from 'class-transformer';
import { UserRatingCreateOrConnectWithoutUserInput } from './user-rating-create-or-connect-without-user.input';
import { UserRatingCreateManyUserInputEnvelope } from './user-rating-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserRatingWhereUniqueInput } from './user-rating-where-unique.input';

@InputType()
export class UserRatingUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [UserRatingCreateWithoutUserInput], {nullable:true})
    @Type(() => UserRatingCreateWithoutUserInput)
    create?: Array<UserRatingCreateWithoutUserInput>;

    @Field(() => [UserRatingCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserRatingCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserRatingCreateOrConnectWithoutUserInput>;

    @Field(() => UserRatingCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserRatingCreateManyUserInputEnvelope)
    createMany?: UserRatingCreateManyUserInputEnvelope;

    @Field(() => [UserRatingWhereUniqueInput], {nullable:true})
    @Type(() => UserRatingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserRatingWhereUniqueInput, 'id'>>;
}
