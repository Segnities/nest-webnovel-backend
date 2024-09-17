import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutAuthorInput } from './novel-create-without-author.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutAuthorInput } from './novel-create-or-connect-without-author.input';
import { NovelUpsertWithWhereUniqueWithoutAuthorInput } from './novel-upsert-with-where-unique-without-author.input';
import { NovelCreateManyAuthorInputEnvelope } from './novel-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { NovelUpdateWithWhereUniqueWithoutAuthorInput } from './novel-update-with-where-unique-without-author.input';
import { NovelUpdateManyWithWhereWithoutAuthorInput } from './novel-update-many-with-where-without-author.input';
import { NovelScalarWhereInput } from './novel-scalar-where.input';

@InputType()
export class NovelUpdateManyWithoutAuthorNestedInput {

    @Field(() => [NovelCreateWithoutAuthorInput], {nullable:true})
    @Type(() => NovelCreateWithoutAuthorInput)
    create?: Array<NovelCreateWithoutAuthorInput>;

    @Field(() => [NovelCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<NovelCreateOrConnectWithoutAuthorInput>;

    @Field(() => [NovelUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => NovelUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<NovelUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => NovelCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => NovelCreateManyAuthorInputEnvelope)
    createMany?: NovelCreateManyAuthorInputEnvelope;

    @Field(() => [NovelWhereUniqueInput], {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    set?: Array<Prisma.AtLeast<NovelWhereUniqueInput, 'id'>>;

    @Field(() => [NovelWhereUniqueInput], {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<NovelWhereUniqueInput, 'id'>>;

    @Field(() => [NovelWhereUniqueInput], {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<NovelWhereUniqueInput, 'id'>>;

    @Field(() => [NovelWhereUniqueInput], {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NovelWhereUniqueInput, 'id'>>;

    @Field(() => [NovelUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => NovelUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<NovelUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [NovelUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => NovelUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<NovelUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [NovelScalarWhereInput], {nullable:true})
    @Type(() => NovelScalarWhereInput)
    deleteMany?: Array<NovelScalarWhereInput>;
}
