import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRatingCreateWithoutUserInput } from './user-rating-create-without-user.input';
import { Type } from 'class-transformer';
import { UserRatingCreateOrConnectWithoutUserInput } from './user-rating-create-or-connect-without-user.input';
import { UserRatingUpsertWithWhereUniqueWithoutUserInput } from './user-rating-upsert-with-where-unique-without-user.input';
import { UserRatingCreateManyUserInputEnvelope } from './user-rating-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserRatingWhereUniqueInput } from './user-rating-where-unique.input';
import { UserRatingUpdateWithWhereUniqueWithoutUserInput } from './user-rating-update-with-where-unique-without-user.input';
import { UserRatingUpdateManyWithWhereWithoutUserInput } from './user-rating-update-many-with-where-without-user.input';
import { UserRatingScalarWhereInput } from './user-rating-scalar-where.input';

@InputType()
export class UserRatingUpdateManyWithoutUserNestedInput {

    @Field(() => [UserRatingCreateWithoutUserInput], {nullable:true})
    @Type(() => UserRatingCreateWithoutUserInput)
    create?: Array<UserRatingCreateWithoutUserInput>;

    @Field(() => [UserRatingCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserRatingCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserRatingCreateOrConnectWithoutUserInput>;

    @Field(() => [UserRatingUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserRatingUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserRatingUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserRatingCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserRatingCreateManyUserInputEnvelope)
    createMany?: UserRatingCreateManyUserInputEnvelope;

    @Field(() => [UserRatingWhereUniqueInput], {nullable:true})
    @Type(() => UserRatingWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserRatingWhereUniqueInput, 'id'>>;

    @Field(() => [UserRatingWhereUniqueInput], {nullable:true})
    @Type(() => UserRatingWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserRatingWhereUniqueInput, 'id'>>;

    @Field(() => [UserRatingWhereUniqueInput], {nullable:true})
    @Type(() => UserRatingWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserRatingWhereUniqueInput, 'id'>>;

    @Field(() => [UserRatingWhereUniqueInput], {nullable:true})
    @Type(() => UserRatingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserRatingWhereUniqueInput, 'id'>>;

    @Field(() => [UserRatingUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserRatingUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserRatingUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserRatingUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserRatingUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserRatingUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserRatingScalarWhereInput], {nullable:true})
    @Type(() => UserRatingScalarWhereInput)
    deleteMany?: Array<UserRatingScalarWhereInput>;
}
