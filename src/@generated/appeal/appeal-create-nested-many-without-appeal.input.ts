import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealCreateWithoutAppealInput } from './appeal-create-without-appeal.input';
import { Type } from 'class-transformer';
import { AppealCreateOrConnectWithoutAppealInput } from './appeal-create-or-connect-without-appeal.input';
import { AppealCreateManyAppealInputEnvelope } from './appeal-create-many-appeal-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AppealWhereUniqueInput } from './appeal-where-unique.input';

@InputType()
export class AppealCreateNestedManyWithoutAppealInput {

    @Field(() => [AppealCreateWithoutAppealInput], {nullable:true})
    @Type(() => AppealCreateWithoutAppealInput)
    create?: Array<AppealCreateWithoutAppealInput>;

    @Field(() => [AppealCreateOrConnectWithoutAppealInput], {nullable:true})
    @Type(() => AppealCreateOrConnectWithoutAppealInput)
    connectOrCreate?: Array<AppealCreateOrConnectWithoutAppealInput>;

    @Field(() => AppealCreateManyAppealInputEnvelope, {nullable:true})
    @Type(() => AppealCreateManyAppealInputEnvelope)
    createMany?: AppealCreateManyAppealInputEnvelope;

    @Field(() => [AppealWhereUniqueInput], {nullable:true})
    @Type(() => AppealWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AppealWhereUniqueInput, 'id'>>;
}
