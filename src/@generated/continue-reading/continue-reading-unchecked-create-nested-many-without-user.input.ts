import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContinueReadingCreateWithoutUserInput } from './continue-reading-create-without-user.input';
import { Type } from 'class-transformer';
import { ContinueReadingCreateOrConnectWithoutUserInput } from './continue-reading-create-or-connect-without-user.input';
import { ContinueReadingCreateManyUserInputEnvelope } from './continue-reading-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContinueReadingWhereUniqueInput } from './continue-reading-where-unique.input';

@InputType()
export class ContinueReadingUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [ContinueReadingCreateWithoutUserInput], {nullable:true})
    @Type(() => ContinueReadingCreateWithoutUserInput)
    create?: Array<ContinueReadingCreateWithoutUserInput>;

    @Field(() => [ContinueReadingCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ContinueReadingCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ContinueReadingCreateOrConnectWithoutUserInput>;

    @Field(() => ContinueReadingCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ContinueReadingCreateManyUserInputEnvelope)
    createMany?: ContinueReadingCreateManyUserInputEnvelope;

    @Field(() => [ContinueReadingWhereUniqueInput], {nullable:true})
    @Type(() => ContinueReadingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContinueReadingWhereUniqueInput, 'id'>>;
}
