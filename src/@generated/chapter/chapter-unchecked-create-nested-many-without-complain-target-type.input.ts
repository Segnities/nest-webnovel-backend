import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterCreateWithoutComplainTargetTypeInput } from './chapter-create-without-complain-target-type.input';
import { Type } from 'class-transformer';
import { ChapterCreateOrConnectWithoutComplainTargetTypeInput } from './chapter-create-or-connect-without-complain-target-type.input';
import { ChapterCreateManyComplainTargetTypeInputEnvelope } from './chapter-create-many-complain-target-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChapterWhereUniqueInput } from './chapter-where-unique.input';

@InputType()
export class ChapterUncheckedCreateNestedManyWithoutComplainTargetTypeInput {

    @Field(() => [ChapterCreateWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => ChapterCreateWithoutComplainTargetTypeInput)
    create?: Array<ChapterCreateWithoutComplainTargetTypeInput>;

    @Field(() => [ChapterCreateOrConnectWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => ChapterCreateOrConnectWithoutComplainTargetTypeInput)
    connectOrCreate?: Array<ChapterCreateOrConnectWithoutComplainTargetTypeInput>;

    @Field(() => ChapterCreateManyComplainTargetTypeInputEnvelope, {nullable:true})
    @Type(() => ChapterCreateManyComplainTargetTypeInputEnvelope)
    createMany?: ChapterCreateManyComplainTargetTypeInputEnvelope;

    @Field(() => [ChapterWhereUniqueInput], {nullable:true})
    @Type(() => ChapterWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>>;
}
