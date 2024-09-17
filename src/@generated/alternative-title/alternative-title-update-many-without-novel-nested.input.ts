import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlternativeTitleCreateWithoutNovelInput } from './alternative-title-create-without-novel.input';
import { Type } from 'class-transformer';
import { AlternativeTitleCreateOrConnectWithoutNovelInput } from './alternative-title-create-or-connect-without-novel.input';
import { AlternativeTitleUpsertWithWhereUniqueWithoutNovelInput } from './alternative-title-upsert-with-where-unique-without-novel.input';
import { AlternativeTitleCreateManyNovelInputEnvelope } from './alternative-title-create-many-novel-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AlternativeTitleWhereUniqueInput } from './alternative-title-where-unique.input';
import { AlternativeTitleUpdateWithWhereUniqueWithoutNovelInput } from './alternative-title-update-with-where-unique-without-novel.input';
import { AlternativeTitleUpdateManyWithWhereWithoutNovelInput } from './alternative-title-update-many-with-where-without-novel.input';
import { AlternativeTitleScalarWhereInput } from './alternative-title-scalar-where.input';

@InputType()
export class AlternativeTitleUpdateManyWithoutNovelNestedInput {

    @Field(() => [AlternativeTitleCreateWithoutNovelInput], {nullable:true})
    @Type(() => AlternativeTitleCreateWithoutNovelInput)
    create?: Array<AlternativeTitleCreateWithoutNovelInput>;

    @Field(() => [AlternativeTitleCreateOrConnectWithoutNovelInput], {nullable:true})
    @Type(() => AlternativeTitleCreateOrConnectWithoutNovelInput)
    connectOrCreate?: Array<AlternativeTitleCreateOrConnectWithoutNovelInput>;

    @Field(() => [AlternativeTitleUpsertWithWhereUniqueWithoutNovelInput], {nullable:true})
    @Type(() => AlternativeTitleUpsertWithWhereUniqueWithoutNovelInput)
    upsert?: Array<AlternativeTitleUpsertWithWhereUniqueWithoutNovelInput>;

    @Field(() => AlternativeTitleCreateManyNovelInputEnvelope, {nullable:true})
    @Type(() => AlternativeTitleCreateManyNovelInputEnvelope)
    createMany?: AlternativeTitleCreateManyNovelInputEnvelope;

    @Field(() => [AlternativeTitleWhereUniqueInput], {nullable:true})
    @Type(() => AlternativeTitleWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AlternativeTitleWhereUniqueInput, 'id'>>;

    @Field(() => [AlternativeTitleWhereUniqueInput], {nullable:true})
    @Type(() => AlternativeTitleWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AlternativeTitleWhereUniqueInput, 'id'>>;

    @Field(() => [AlternativeTitleWhereUniqueInput], {nullable:true})
    @Type(() => AlternativeTitleWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AlternativeTitleWhereUniqueInput, 'id'>>;

    @Field(() => [AlternativeTitleWhereUniqueInput], {nullable:true})
    @Type(() => AlternativeTitleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AlternativeTitleWhereUniqueInput, 'id'>>;

    @Field(() => [AlternativeTitleUpdateWithWhereUniqueWithoutNovelInput], {nullable:true})
    @Type(() => AlternativeTitleUpdateWithWhereUniqueWithoutNovelInput)
    update?: Array<AlternativeTitleUpdateWithWhereUniqueWithoutNovelInput>;

    @Field(() => [AlternativeTitleUpdateManyWithWhereWithoutNovelInput], {nullable:true})
    @Type(() => AlternativeTitleUpdateManyWithWhereWithoutNovelInput)
    updateMany?: Array<AlternativeTitleUpdateManyWithWhereWithoutNovelInput>;

    @Field(() => [AlternativeTitleScalarWhereInput], {nullable:true})
    @Type(() => AlternativeTitleScalarWhereInput)
    deleteMany?: Array<AlternativeTitleScalarWhereInput>;
}
