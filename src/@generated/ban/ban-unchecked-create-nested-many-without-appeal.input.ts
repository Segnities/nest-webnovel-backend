import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BanCreateWithoutAppealInput } from './ban-create-without-appeal.input';
import { Type } from 'class-transformer';
import { BanCreateOrConnectWithoutAppealInput } from './ban-create-or-connect-without-appeal.input';
import { BanCreateManyAppealInputEnvelope } from './ban-create-many-appeal-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BanWhereUniqueInput } from './ban-where-unique.input';

@InputType()
export class BanUncheckedCreateNestedManyWithoutAppealInput {

    @Field(() => [BanCreateWithoutAppealInput], {nullable:true})
    @Type(() => BanCreateWithoutAppealInput)
    create?: Array<BanCreateWithoutAppealInput>;

    @Field(() => [BanCreateOrConnectWithoutAppealInput], {nullable:true})
    @Type(() => BanCreateOrConnectWithoutAppealInput)
    connectOrCreate?: Array<BanCreateOrConnectWithoutAppealInput>;

    @Field(() => BanCreateManyAppealInputEnvelope, {nullable:true})
    @Type(() => BanCreateManyAppealInputEnvelope)
    createMany?: BanCreateManyAppealInputEnvelope;

    @Field(() => [BanWhereUniqueInput], {nullable:true})
    @Type(() => BanWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BanWhereUniqueInput, 'id'>>;
}
