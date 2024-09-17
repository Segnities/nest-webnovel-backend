import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BanCreateWithoutUserInput } from './ban-create-without-user.input';
import { Type } from 'class-transformer';
import { BanCreateOrConnectWithoutUserInput } from './ban-create-or-connect-without-user.input';
import { BanUpsertWithWhereUniqueWithoutUserInput } from './ban-upsert-with-where-unique-without-user.input';
import { BanCreateManyUserInputEnvelope } from './ban-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BanWhereUniqueInput } from './ban-where-unique.input';
import { BanUpdateWithWhereUniqueWithoutUserInput } from './ban-update-with-where-unique-without-user.input';
import { BanUpdateManyWithWhereWithoutUserInput } from './ban-update-many-with-where-without-user.input';
import { BanScalarWhereInput } from './ban-scalar-where.input';

@InputType()
export class BanUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [BanCreateWithoutUserInput], {nullable:true})
    @Type(() => BanCreateWithoutUserInput)
    create?: Array<BanCreateWithoutUserInput>;

    @Field(() => [BanCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => BanCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<BanCreateOrConnectWithoutUserInput>;

    @Field(() => [BanUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => BanUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<BanUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => BanCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => BanCreateManyUserInputEnvelope)
    createMany?: BanCreateManyUserInputEnvelope;

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

    @Field(() => [BanUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => BanUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<BanUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [BanUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => BanUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<BanUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [BanScalarWhereInput], {nullable:true})
    @Type(() => BanScalarWhereInput)
    deleteMany?: Array<BanScalarWhereInput>;
}
