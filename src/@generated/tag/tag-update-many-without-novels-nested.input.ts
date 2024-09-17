import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutNovelsInput } from './tag-create-without-novels.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutNovelsInput } from './tag-create-or-connect-without-novels.input';
import { TagUpsertWithWhereUniqueWithoutNovelsInput } from './tag-upsert-with-where-unique-without-novels.input';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithWhereUniqueWithoutNovelsInput } from './tag-update-with-where-unique-without-novels.input';
import { TagUpdateManyWithWhereWithoutNovelsInput } from './tag-update-many-with-where-without-novels.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';

@InputType()
export class TagUpdateManyWithoutNovelsNestedInput {

    @Field(() => [TagCreateWithoutNovelsInput], {nullable:true})
    @Type(() => TagCreateWithoutNovelsInput)
    create?: Array<TagCreateWithoutNovelsInput>;

    @Field(() => [TagCreateOrConnectWithoutNovelsInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutNovelsInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutNovelsInput>;

    @Field(() => [TagUpsertWithWhereUniqueWithoutNovelsInput], {nullable:true})
    @Type(() => TagUpsertWithWhereUniqueWithoutNovelsInput)
    upsert?: Array<TagUpsertWithWhereUniqueWithoutNovelsInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'title'>>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'title'>>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'title'>>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'title'>>;

    @Field(() => [TagUpdateWithWhereUniqueWithoutNovelsInput], {nullable:true})
    @Type(() => TagUpdateWithWhereUniqueWithoutNovelsInput)
    update?: Array<TagUpdateWithWhereUniqueWithoutNovelsInput>;

    @Field(() => [TagUpdateManyWithWhereWithoutNovelsInput], {nullable:true})
    @Type(() => TagUpdateManyWithWhereWithoutNovelsInput)
    updateMany?: Array<TagUpdateManyWithWhereWithoutNovelsInput>;

    @Field(() => [TagScalarWhereInput], {nullable:true})
    @Type(() => TagScalarWhereInput)
    deleteMany?: Array<TagScalarWhereInput>;
}
