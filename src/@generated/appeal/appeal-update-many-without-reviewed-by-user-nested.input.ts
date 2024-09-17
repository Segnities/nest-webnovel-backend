import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealCreateWithoutReviewedByUserInput } from './appeal-create-without-reviewed-by-user.input';
import { Type } from 'class-transformer';
import { AppealCreateOrConnectWithoutReviewedByUserInput } from './appeal-create-or-connect-without-reviewed-by-user.input';
import { AppealUpsertWithWhereUniqueWithoutReviewedByUserInput } from './appeal-upsert-with-where-unique-without-reviewed-by-user.input';
import { AppealCreateManyReviewedByUserInputEnvelope } from './appeal-create-many-reviewed-by-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AppealWhereUniqueInput } from './appeal-where-unique.input';
import { AppealUpdateWithWhereUniqueWithoutReviewedByUserInput } from './appeal-update-with-where-unique-without-reviewed-by-user.input';
import { AppealUpdateManyWithWhereWithoutReviewedByUserInput } from './appeal-update-many-with-where-without-reviewed-by-user.input';
import { AppealScalarWhereInput } from './appeal-scalar-where.input';

@InputType()
export class AppealUpdateManyWithoutReviewedByUserNestedInput {

    @Field(() => [AppealCreateWithoutReviewedByUserInput], {nullable:true})
    @Type(() => AppealCreateWithoutReviewedByUserInput)
    create?: Array<AppealCreateWithoutReviewedByUserInput>;

    @Field(() => [AppealCreateOrConnectWithoutReviewedByUserInput], {nullable:true})
    @Type(() => AppealCreateOrConnectWithoutReviewedByUserInput)
    connectOrCreate?: Array<AppealCreateOrConnectWithoutReviewedByUserInput>;

    @Field(() => [AppealUpsertWithWhereUniqueWithoutReviewedByUserInput], {nullable:true})
    @Type(() => AppealUpsertWithWhereUniqueWithoutReviewedByUserInput)
    upsert?: Array<AppealUpsertWithWhereUniqueWithoutReviewedByUserInput>;

    @Field(() => AppealCreateManyReviewedByUserInputEnvelope, {nullable:true})
    @Type(() => AppealCreateManyReviewedByUserInputEnvelope)
    createMany?: AppealCreateManyReviewedByUserInputEnvelope;

    @Field(() => [AppealWhereUniqueInput], {nullable:true})
    @Type(() => AppealWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AppealWhereUniqueInput, 'id'>>;

    @Field(() => [AppealWhereUniqueInput], {nullable:true})
    @Type(() => AppealWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AppealWhereUniqueInput, 'id'>>;

    @Field(() => [AppealWhereUniqueInput], {nullable:true})
    @Type(() => AppealWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AppealWhereUniqueInput, 'id'>>;

    @Field(() => [AppealWhereUniqueInput], {nullable:true})
    @Type(() => AppealWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AppealWhereUniqueInput, 'id'>>;

    @Field(() => [AppealUpdateWithWhereUniqueWithoutReviewedByUserInput], {nullable:true})
    @Type(() => AppealUpdateWithWhereUniqueWithoutReviewedByUserInput)
    update?: Array<AppealUpdateWithWhereUniqueWithoutReviewedByUserInput>;

    @Field(() => [AppealUpdateManyWithWhereWithoutReviewedByUserInput], {nullable:true})
    @Type(() => AppealUpdateManyWithWhereWithoutReviewedByUserInput)
    updateMany?: Array<AppealUpdateManyWithWhereWithoutReviewedByUserInput>;

    @Field(() => [AppealScalarWhereInput], {nullable:true})
    @Type(() => AppealScalarWhereInput)
    deleteMany?: Array<AppealScalarWhereInput>;
}
