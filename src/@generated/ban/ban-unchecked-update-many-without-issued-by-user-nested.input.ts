import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BanCreateWithoutIssuedByUserInput } from './ban-create-without-issued-by-user.input';
import { Type } from 'class-transformer';
import { BanCreateOrConnectWithoutIssuedByUserInput } from './ban-create-or-connect-without-issued-by-user.input';
import { BanUpsertWithWhereUniqueWithoutIssuedByUserInput } from './ban-upsert-with-where-unique-without-issued-by-user.input';
import { BanCreateManyIssuedByUserInputEnvelope } from './ban-create-many-issued-by-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BanWhereUniqueInput } from './ban-where-unique.input';
import { BanUpdateWithWhereUniqueWithoutIssuedByUserInput } from './ban-update-with-where-unique-without-issued-by-user.input';
import { BanUpdateManyWithWhereWithoutIssuedByUserInput } from './ban-update-many-with-where-without-issued-by-user.input';
import { BanScalarWhereInput } from './ban-scalar-where.input';

@InputType()
export class BanUncheckedUpdateManyWithoutIssuedByUserNestedInput {

    @Field(() => [BanCreateWithoutIssuedByUserInput], {nullable:true})
    @Type(() => BanCreateWithoutIssuedByUserInput)
    create?: Array<BanCreateWithoutIssuedByUserInput>;

    @Field(() => [BanCreateOrConnectWithoutIssuedByUserInput], {nullable:true})
    @Type(() => BanCreateOrConnectWithoutIssuedByUserInput)
    connectOrCreate?: Array<BanCreateOrConnectWithoutIssuedByUserInput>;

    @Field(() => [BanUpsertWithWhereUniqueWithoutIssuedByUserInput], {nullable:true})
    @Type(() => BanUpsertWithWhereUniqueWithoutIssuedByUserInput)
    upsert?: Array<BanUpsertWithWhereUniqueWithoutIssuedByUserInput>;

    @Field(() => BanCreateManyIssuedByUserInputEnvelope, {nullable:true})
    @Type(() => BanCreateManyIssuedByUserInputEnvelope)
    createMany?: BanCreateManyIssuedByUserInputEnvelope;

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

    @Field(() => [BanUpdateWithWhereUniqueWithoutIssuedByUserInput], {nullable:true})
    @Type(() => BanUpdateWithWhereUniqueWithoutIssuedByUserInput)
    update?: Array<BanUpdateWithWhereUniqueWithoutIssuedByUserInput>;

    @Field(() => [BanUpdateManyWithWhereWithoutIssuedByUserInput], {nullable:true})
    @Type(() => BanUpdateManyWithWhereWithoutIssuedByUserInput)
    updateMany?: Array<BanUpdateManyWithWhereWithoutIssuedByUserInput>;

    @Field(() => [BanScalarWhereInput], {nullable:true})
    @Type(() => BanScalarWhereInput)
    deleteMany?: Array<BanScalarWhereInput>;
}
