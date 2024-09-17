import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutComplainTargetTypeInput } from './novel-create-without-complain-target-type.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutComplainTargetTypeInput } from './novel-create-or-connect-without-complain-target-type.input';
import { NovelCreateManyComplainTargetTypeInputEnvelope } from './novel-create-many-complain-target-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';

@InputType()
export class NovelCreateNestedManyWithoutComplainTargetTypeInput {

    @Field(() => [NovelCreateWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => NovelCreateWithoutComplainTargetTypeInput)
    create?: Array<NovelCreateWithoutComplainTargetTypeInput>;

    @Field(() => [NovelCreateOrConnectWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutComplainTargetTypeInput)
    connectOrCreate?: Array<NovelCreateOrConnectWithoutComplainTargetTypeInput>;

    @Field(() => NovelCreateManyComplainTargetTypeInputEnvelope, {nullable:true})
    @Type(() => NovelCreateManyComplainTargetTypeInputEnvelope)
    createMany?: NovelCreateManyComplainTargetTypeInputEnvelope;

    @Field(() => [NovelWhereUniqueInput], {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NovelWhereUniqueInput, 'id'>>;
}
