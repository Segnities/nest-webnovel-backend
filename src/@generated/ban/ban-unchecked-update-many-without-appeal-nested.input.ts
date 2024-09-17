import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BanCreateWithoutAppealInput } from './ban-create-without-appeal.input';
import { Type } from 'class-transformer';
import { BanCreateOrConnectWithoutAppealInput } from './ban-create-or-connect-without-appeal.input';
import { BanUpsertWithWhereUniqueWithoutAppealInput } from './ban-upsert-with-where-unique-without-appeal.input';
import { BanCreateManyAppealInputEnvelope } from './ban-create-many-appeal-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BanWhereUniqueInput } from './ban-where-unique.input';
import { BanUpdateWithWhereUniqueWithoutAppealInput } from './ban-update-with-where-unique-without-appeal.input';
import { BanUpdateManyWithWhereWithoutAppealInput } from './ban-update-many-with-where-without-appeal.input';
import { BanScalarWhereInput } from './ban-scalar-where.input';

@InputType()
export class BanUncheckedUpdateManyWithoutAppealNestedInput {

    @Field(() => [BanCreateWithoutAppealInput], {nullable:true})
    @Type(() => BanCreateWithoutAppealInput)
    create?: Array<BanCreateWithoutAppealInput>;

    @Field(() => [BanCreateOrConnectWithoutAppealInput], {nullable:true})
    @Type(() => BanCreateOrConnectWithoutAppealInput)
    connectOrCreate?: Array<BanCreateOrConnectWithoutAppealInput>;

    @Field(() => [BanUpsertWithWhereUniqueWithoutAppealInput], {nullable:true})
    @Type(() => BanUpsertWithWhereUniqueWithoutAppealInput)
    upsert?: Array<BanUpsertWithWhereUniqueWithoutAppealInput>;

    @Field(() => BanCreateManyAppealInputEnvelope, {nullable:true})
    @Type(() => BanCreateManyAppealInputEnvelope)
    createMany?: BanCreateManyAppealInputEnvelope;

    @Field(() => [BanWhereUniqueInput], {nullable:true})
    @Type(() => BanWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BanWhereUniqueInput, 'id'>>;

    @Field(() => [BanWhereUniqueInput], {nullable:true})
    @Type(() => BanWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BanWhereUniqueInput, 'id'>>;

    @Field(() => [BanWhereUniqueInput], {nullable:true})
    @Type(() => BanWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BanWhereUniqueInput, 'id'>>;

    @Field(() => [BanWhereUniqueInput], {nullable:true})
    @Type(() => BanWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BanWhereUniqueInput, 'id'>>;

    @Field(() => [BanUpdateWithWhereUniqueWithoutAppealInput], {nullable:true})
    @Type(() => BanUpdateWithWhereUniqueWithoutAppealInput)
    update?: Array<BanUpdateWithWhereUniqueWithoutAppealInput>;

    @Field(() => [BanUpdateManyWithWhereWithoutAppealInput], {nullable:true})
    @Type(() => BanUpdateManyWithWhereWithoutAppealInput)
    updateMany?: Array<BanUpdateManyWithWhereWithoutAppealInput>;

    @Field(() => [BanScalarWhereInput], {nullable:true})
    @Type(() => BanScalarWhereInput)
    deleteMany?: Array<BanScalarWhereInput>;
}
