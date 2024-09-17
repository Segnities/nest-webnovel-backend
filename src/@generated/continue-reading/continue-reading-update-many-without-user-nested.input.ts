import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContinueReadingCreateWithoutUserInput } from './continue-reading-create-without-user.input';
import { Type } from 'class-transformer';
import { ContinueReadingCreateOrConnectWithoutUserInput } from './continue-reading-create-or-connect-without-user.input';
import { ContinueReadingUpsertWithWhereUniqueWithoutUserInput } from './continue-reading-upsert-with-where-unique-without-user.input';
import { ContinueReadingCreateManyUserInputEnvelope } from './continue-reading-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContinueReadingWhereUniqueInput } from './continue-reading-where-unique.input';
import { ContinueReadingUpdateWithWhereUniqueWithoutUserInput } from './continue-reading-update-with-where-unique-without-user.input';
import { ContinueReadingUpdateManyWithWhereWithoutUserInput } from './continue-reading-update-many-with-where-without-user.input';
import { ContinueReadingScalarWhereInput } from './continue-reading-scalar-where.input';

@InputType()
export class ContinueReadingUpdateManyWithoutUserNestedInput {

    @Field(() => [ContinueReadingCreateWithoutUserInput], {nullable:true})
    @Type(() => ContinueReadingCreateWithoutUserInput)
    create?: Array<ContinueReadingCreateWithoutUserInput>;

    @Field(() => [ContinueReadingCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ContinueReadingCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ContinueReadingCreateOrConnectWithoutUserInput>;

    @Field(() => [ContinueReadingUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ContinueReadingUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ContinueReadingUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ContinueReadingCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ContinueReadingCreateManyUserInputEnvelope)
    createMany?: ContinueReadingCreateManyUserInputEnvelope;

    @Field(() => [ContinueReadingWhereUniqueInput], {nullable:true})
    @Type(() => ContinueReadingWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ContinueReadingWhereUniqueInput, 'id'>>;

    @Field(() => [ContinueReadingWhereUniqueInput], {nullable:true})
    @Type(() => ContinueReadingWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ContinueReadingWhereUniqueInput, 'id'>>;

    @Field(() => [ContinueReadingWhereUniqueInput], {nullable:true})
    @Type(() => ContinueReadingWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ContinueReadingWhereUniqueInput, 'id'>>;

    @Field(() => [ContinueReadingWhereUniqueInput], {nullable:true})
    @Type(() => ContinueReadingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContinueReadingWhereUniqueInput, 'id'>>;

    @Field(() => [ContinueReadingUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ContinueReadingUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ContinueReadingUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ContinueReadingUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ContinueReadingUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ContinueReadingUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ContinueReadingScalarWhereInput], {nullable:true})
    @Type(() => ContinueReadingScalarWhereInput)
    deleteMany?: Array<ContinueReadingScalarWhereInput>;
}
