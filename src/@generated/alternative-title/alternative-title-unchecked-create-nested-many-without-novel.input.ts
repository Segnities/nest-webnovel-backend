import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlternativeTitleCreateWithoutNovelInput } from './alternative-title-create-without-novel.input';
import { Type } from 'class-transformer';
import { AlternativeTitleCreateOrConnectWithoutNovelInput } from './alternative-title-create-or-connect-without-novel.input';
import { AlternativeTitleCreateManyNovelInputEnvelope } from './alternative-title-create-many-novel-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AlternativeTitleWhereUniqueInput } from './alternative-title-where-unique.input';

@InputType()
export class AlternativeTitleUncheckedCreateNestedManyWithoutNovelInput {

    @Field(() => [AlternativeTitleCreateWithoutNovelInput], {nullable:true})
    @Type(() => AlternativeTitleCreateWithoutNovelInput)
    create?: Array<AlternativeTitleCreateWithoutNovelInput>;

    @Field(() => [AlternativeTitleCreateOrConnectWithoutNovelInput], {nullable:true})
    @Type(() => AlternativeTitleCreateOrConnectWithoutNovelInput)
    connectOrCreate?: Array<AlternativeTitleCreateOrConnectWithoutNovelInput>;

    @Field(() => AlternativeTitleCreateManyNovelInputEnvelope, {nullable:true})
    @Type(() => AlternativeTitleCreateManyNovelInputEnvelope)
    createMany?: AlternativeTitleCreateManyNovelInputEnvelope;

    @Field(() => [AlternativeTitleWhereUniqueInput], {nullable:true})
    @Type(() => AlternativeTitleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AlternativeTitleWhereUniqueInput, 'id'>>;
}
