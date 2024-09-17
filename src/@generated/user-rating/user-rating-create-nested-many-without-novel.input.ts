import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRatingCreateWithoutNovelInput } from './user-rating-create-without-novel.input';
import { Type } from 'class-transformer';
import { UserRatingCreateOrConnectWithoutNovelInput } from './user-rating-create-or-connect-without-novel.input';
import { UserRatingCreateManyNovelInputEnvelope } from './user-rating-create-many-novel-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserRatingWhereUniqueInput } from './user-rating-where-unique.input';

@InputType()
export class UserRatingCreateNestedManyWithoutNovelInput {

    @Field(() => [UserRatingCreateWithoutNovelInput], {nullable:true})
    @Type(() => UserRatingCreateWithoutNovelInput)
    create?: Array<UserRatingCreateWithoutNovelInput>;

    @Field(() => [UserRatingCreateOrConnectWithoutNovelInput], {nullable:true})
    @Type(() => UserRatingCreateOrConnectWithoutNovelInput)
    connectOrCreate?: Array<UserRatingCreateOrConnectWithoutNovelInput>;

    @Field(() => UserRatingCreateManyNovelInputEnvelope, {nullable:true})
    @Type(() => UserRatingCreateManyNovelInputEnvelope)
    createMany?: UserRatingCreateManyNovelInputEnvelope;

    @Field(() => [UserRatingWhereUniqueInput], {nullable:true})
    @Type(() => UserRatingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserRatingWhereUniqueInput, 'id'>>;
}
