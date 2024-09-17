import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRatingCreateWithoutNovelInput } from './user-rating-create-without-novel.input';
import { Type } from 'class-transformer';
import { UserRatingCreateOrConnectWithoutNovelInput } from './user-rating-create-or-connect-without-novel.input';
import { UserRatingUpsertWithWhereUniqueWithoutNovelInput } from './user-rating-upsert-with-where-unique-without-novel.input';
import { UserRatingCreateManyNovelInputEnvelope } from './user-rating-create-many-novel-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserRatingWhereUniqueInput } from './user-rating-where-unique.input';
import { UserRatingUpdateWithWhereUniqueWithoutNovelInput } from './user-rating-update-with-where-unique-without-novel.input';
import { UserRatingUpdateManyWithWhereWithoutNovelInput } from './user-rating-update-many-with-where-without-novel.input';
import { UserRatingScalarWhereInput } from './user-rating-scalar-where.input';

@InputType()
export class UserRatingUpdateManyWithoutNovelNestedInput {

    @Field(() => [UserRatingCreateWithoutNovelInput], {nullable:true})
    @Type(() => UserRatingCreateWithoutNovelInput)
    create?: Array<UserRatingCreateWithoutNovelInput>;

    @Field(() => [UserRatingCreateOrConnectWithoutNovelInput], {nullable:true})
    @Type(() => UserRatingCreateOrConnectWithoutNovelInput)
    connectOrCreate?: Array<UserRatingCreateOrConnectWithoutNovelInput>;

    @Field(() => [UserRatingUpsertWithWhereUniqueWithoutNovelInput], {nullable:true})
    @Type(() => UserRatingUpsertWithWhereUniqueWithoutNovelInput)
    upsert?: Array<UserRatingUpsertWithWhereUniqueWithoutNovelInput>;

    @Field(() => UserRatingCreateManyNovelInputEnvelope, {nullable:true})
    @Type(() => UserRatingCreateManyNovelInputEnvelope)
    createMany?: UserRatingCreateManyNovelInputEnvelope;

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

    @Field(() => [UserRatingUpdateWithWhereUniqueWithoutNovelInput], {nullable:true})
    @Type(() => UserRatingUpdateWithWhereUniqueWithoutNovelInput)
    update?: Array<UserRatingUpdateWithWhereUniqueWithoutNovelInput>;

    @Field(() => [UserRatingUpdateManyWithWhereWithoutNovelInput], {nullable:true})
    @Type(() => UserRatingUpdateManyWithWhereWithoutNovelInput)
    updateMany?: Array<UserRatingUpdateManyWithWhereWithoutNovelInput>;

    @Field(() => [UserRatingScalarWhereInput], {nullable:true})
    @Type(() => UserRatingScalarWhereInput)
    deleteMany?: Array<UserRatingScalarWhereInput>;
}
