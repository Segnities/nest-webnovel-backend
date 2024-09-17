import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutTagsInput } from './novel-create-without-tags.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutTagsInput } from './novel-create-or-connect-without-tags.input';
import { NovelUpsertWithWhereUniqueWithoutTagsInput } from './novel-upsert-with-where-unique-without-tags.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { NovelUpdateWithWhereUniqueWithoutTagsInput } from './novel-update-with-where-unique-without-tags.input';
import { NovelUpdateManyWithWhereWithoutTagsInput } from './novel-update-many-with-where-without-tags.input';
import { NovelScalarWhereInput } from './novel-scalar-where.input';

@InputType()
export class NovelUncheckedUpdateManyWithoutTagsNestedInput {

    @Field(() => [NovelCreateWithoutTagsInput], {nullable:true})
    @Type(() => NovelCreateWithoutTagsInput)
    create?: Array<NovelCreateWithoutTagsInput>;

    @Field(() => [NovelCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<NovelCreateOrConnectWithoutTagsInput>;

    @Field(() => [NovelUpsertWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => NovelUpsertWithWhereUniqueWithoutTagsInput)
    upsert?: Array<NovelUpsertWithWhereUniqueWithoutTagsInput>;

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

    @Field(() => [NovelUpdateWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => NovelUpdateWithWhereUniqueWithoutTagsInput)
    update?: Array<NovelUpdateWithWhereUniqueWithoutTagsInput>;

    @Field(() => [NovelUpdateManyWithWhereWithoutTagsInput], {nullable:true})
    @Type(() => NovelUpdateManyWithWhereWithoutTagsInput)
    updateMany?: Array<NovelUpdateManyWithWhereWithoutTagsInput>;

    @Field(() => [NovelScalarWhereInput], {nullable:true})
    @Type(() => NovelScalarWhereInput)
    deleteMany?: Array<NovelScalarWhereInput>;
}
