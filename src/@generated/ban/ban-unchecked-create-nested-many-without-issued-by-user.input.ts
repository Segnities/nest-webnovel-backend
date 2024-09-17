import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BanCreateWithoutIssuedByUserInput } from './ban-create-without-issued-by-user.input';
import { Type } from 'class-transformer';
import { BanCreateOrConnectWithoutIssuedByUserInput } from './ban-create-or-connect-without-issued-by-user.input';
import { BanCreateManyIssuedByUserInputEnvelope } from './ban-create-many-issued-by-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BanWhereUniqueInput } from './ban-where-unique.input';

@InputType()
export class BanUncheckedCreateNestedManyWithoutIssuedByUserInput {

    @Field(() => [BanCreateWithoutIssuedByUserInput], {nullable:true})
    @Type(() => BanCreateWithoutIssuedByUserInput)
    create?: Array<BanCreateWithoutIssuedByUserInput>;

    @Field(() => [BanCreateOrConnectWithoutIssuedByUserInput], {nullable:true})
    @Type(() => BanCreateOrConnectWithoutIssuedByUserInput)
    connectOrCreate?: Array<BanCreateOrConnectWithoutIssuedByUserInput>;

    @Field(() => BanCreateManyIssuedByUserInputEnvelope, {nullable:true})
    @Type(() => BanCreateManyIssuedByUserInputEnvelope)
    createMany?: BanCreateManyIssuedByUserInputEnvelope;

    @Field(() => [BanWhereUniqueInput], {nullable:true})
    @Type(() => BanWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BanWhereUniqueInput, 'id'>>;
}
