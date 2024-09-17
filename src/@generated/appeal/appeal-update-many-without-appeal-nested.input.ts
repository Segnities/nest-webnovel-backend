import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealCreateWithoutAppealInput } from './appeal-create-without-appeal.input';
import { Type } from 'class-transformer';
import { AppealCreateOrConnectWithoutAppealInput } from './appeal-create-or-connect-without-appeal.input';
import { AppealUpsertWithWhereUniqueWithoutAppealInput } from './appeal-upsert-with-where-unique-without-appeal.input';
import { AppealCreateManyAppealInputEnvelope } from './appeal-create-many-appeal-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AppealWhereUniqueInput } from './appeal-where-unique.input';
import { AppealUpdateWithWhereUniqueWithoutAppealInput } from './appeal-update-with-where-unique-without-appeal.input';
import { AppealUpdateManyWithWhereWithoutAppealInput } from './appeal-update-many-with-where-without-appeal.input';
import { AppealScalarWhereInput } from './appeal-scalar-where.input';

@InputType()
export class AppealUpdateManyWithoutAppealNestedInput {

    @Field(() => [AppealCreateWithoutAppealInput], {nullable:true})
    @Type(() => AppealCreateWithoutAppealInput)
    create?: Array<AppealCreateWithoutAppealInput>;

    @Field(() => [AppealCreateOrConnectWithoutAppealInput], {nullable:true})
    @Type(() => AppealCreateOrConnectWithoutAppealInput)
    connectOrCreate?: Array<AppealCreateOrConnectWithoutAppealInput>;

    @Field(() => [AppealUpsertWithWhereUniqueWithoutAppealInput], {nullable:true})
    @Type(() => AppealUpsertWithWhereUniqueWithoutAppealInput)
    upsert?: Array<AppealUpsertWithWhereUniqueWithoutAppealInput>;

    @Field(() => AppealCreateManyAppealInputEnvelope, {nullable:true})
    @Type(() => AppealCreateManyAppealInputEnvelope)
    createMany?: AppealCreateManyAppealInputEnvelope;

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

    @Field(() => [AppealUpdateWithWhereUniqueWithoutAppealInput], {nullable:true})
    @Type(() => AppealUpdateWithWhereUniqueWithoutAppealInput)
    update?: Array<AppealUpdateWithWhereUniqueWithoutAppealInput>;

    @Field(() => [AppealUpdateManyWithWhereWithoutAppealInput], {nullable:true})
    @Type(() => AppealUpdateManyWithWhereWithoutAppealInput)
    updateMany?: Array<AppealUpdateManyWithWhereWithoutAppealInput>;

    @Field(() => [AppealScalarWhereInput], {nullable:true})
    @Type(() => AppealScalarWhereInput)
    deleteMany?: Array<AppealScalarWhereInput>;
}
