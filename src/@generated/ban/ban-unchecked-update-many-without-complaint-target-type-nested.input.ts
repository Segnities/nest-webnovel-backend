import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BanCreateWithoutComplaintTargetTypeInput } from './ban-create-without-complaint-target-type.input';
import { Type } from 'class-transformer';
import { BanCreateOrConnectWithoutComplaintTargetTypeInput } from './ban-create-or-connect-without-complaint-target-type.input';
import { BanUpsertWithWhereUniqueWithoutComplaintTargetTypeInput } from './ban-upsert-with-where-unique-without-complaint-target-type.input';
import { BanCreateManyComplaintTargetTypeInputEnvelope } from './ban-create-many-complaint-target-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BanWhereUniqueInput } from './ban-where-unique.input';
import { BanUpdateWithWhereUniqueWithoutComplaintTargetTypeInput } from './ban-update-with-where-unique-without-complaint-target-type.input';
import { BanUpdateManyWithWhereWithoutComplaintTargetTypeInput } from './ban-update-many-with-where-without-complaint-target-type.input';
import { BanScalarWhereInput } from './ban-scalar-where.input';

@InputType()
export class BanUncheckedUpdateManyWithoutComplaintTargetTypeNestedInput {

    @Field(() => [BanCreateWithoutComplaintTargetTypeInput], {nullable:true})
    @Type(() => BanCreateWithoutComplaintTargetTypeInput)
    create?: Array<BanCreateWithoutComplaintTargetTypeInput>;

    @Field(() => [BanCreateOrConnectWithoutComplaintTargetTypeInput], {nullable:true})
    @Type(() => BanCreateOrConnectWithoutComplaintTargetTypeInput)
    connectOrCreate?: Array<BanCreateOrConnectWithoutComplaintTargetTypeInput>;

    @Field(() => [BanUpsertWithWhereUniqueWithoutComplaintTargetTypeInput], {nullable:true})
    @Type(() => BanUpsertWithWhereUniqueWithoutComplaintTargetTypeInput)
    upsert?: Array<BanUpsertWithWhereUniqueWithoutComplaintTargetTypeInput>;

    @Field(() => BanCreateManyComplaintTargetTypeInputEnvelope, {nullable:true})
    @Type(() => BanCreateManyComplaintTargetTypeInputEnvelope)
    createMany?: BanCreateManyComplaintTargetTypeInputEnvelope;

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

    @Field(() => [BanUpdateWithWhereUniqueWithoutComplaintTargetTypeInput], {nullable:true})
    @Type(() => BanUpdateWithWhereUniqueWithoutComplaintTargetTypeInput)
    update?: Array<BanUpdateWithWhereUniqueWithoutComplaintTargetTypeInput>;

    @Field(() => [BanUpdateManyWithWhereWithoutComplaintTargetTypeInput], {nullable:true})
    @Type(() => BanUpdateManyWithWhereWithoutComplaintTargetTypeInput)
    updateMany?: Array<BanUpdateManyWithWhereWithoutComplaintTargetTypeInput>;

    @Field(() => [BanScalarWhereInput], {nullable:true})
    @Type(() => BanScalarWhereInput)
    deleteMany?: Array<BanScalarWhereInput>;
}
