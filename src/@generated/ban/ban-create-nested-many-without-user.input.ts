import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BanCreateWithoutUserInput } from './ban-create-without-user.input';
import { Type } from 'class-transformer';
import { BanCreateOrConnectWithoutUserInput } from './ban-create-or-connect-without-user.input';
import { BanCreateManyUserInputEnvelope } from './ban-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BanWhereUniqueInput } from './ban-where-unique.input';

@InputType()
export class BanCreateNestedManyWithoutUserInput {

    @Field(() => [BanCreateWithoutUserInput], {nullable:true})
    @Type(() => BanCreateWithoutUserInput)
    create?: Array<BanCreateWithoutUserInput>;

    @Field(() => [BanCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => BanCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<BanCreateOrConnectWithoutUserInput>;

    @Field(() => BanCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => BanCreateManyUserInputEnvelope)
    createMany?: BanCreateManyUserInputEnvelope;

    @Field(() => [BanWhereUniqueInput], {nullable:true})
    @Type(() => BanWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BanWhereUniqueInput, 'id'>>;
}
