import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BanCreateWithoutComplaintTargetTypeInput } from './ban-create-without-complaint-target-type.input';
import { Type } from 'class-transformer';
import { BanCreateOrConnectWithoutComplaintTargetTypeInput } from './ban-create-or-connect-without-complaint-target-type.input';
import { BanCreateManyComplaintTargetTypeInputEnvelope } from './ban-create-many-complaint-target-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BanWhereUniqueInput } from './ban-where-unique.input';

@InputType()
export class BanCreateNestedManyWithoutComplaintTargetTypeInput {

    @Field(() => [BanCreateWithoutComplaintTargetTypeInput], {nullable:true})
    @Type(() => BanCreateWithoutComplaintTargetTypeInput)
    create?: Array<BanCreateWithoutComplaintTargetTypeInput>;

    @Field(() => [BanCreateOrConnectWithoutComplaintTargetTypeInput], {nullable:true})
    @Type(() => BanCreateOrConnectWithoutComplaintTargetTypeInput)
    connectOrCreate?: Array<BanCreateOrConnectWithoutComplaintTargetTypeInput>;

    @Field(() => BanCreateManyComplaintTargetTypeInputEnvelope, {nullable:true})
    @Type(() => BanCreateManyComplaintTargetTypeInputEnvelope)
    createMany?: BanCreateManyComplaintTargetTypeInputEnvelope;

    @Field(() => [BanWhereUniqueInput], {nullable:true})
    @Type(() => BanWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BanWhereUniqueInput, 'id'>>;
}
