import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutCommendableTypeInput } from './novel-create-without-commendable-type.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutCommendableTypeInput } from './novel-create-or-connect-without-commendable-type.input';
import { NovelUpsertWithWhereUniqueWithoutCommendableTypeInput } from './novel-upsert-with-where-unique-without-commendable-type.input';
import { NovelCreateManyCommendableTypeInputEnvelope } from './novel-create-many-commendable-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { NovelUpdateWithWhereUniqueWithoutCommendableTypeInput } from './novel-update-with-where-unique-without-commendable-type.input';
import { NovelUpdateManyWithWhereWithoutCommendableTypeInput } from './novel-update-many-with-where-without-commendable-type.input';
import { NovelScalarWhereInput } from './novel-scalar-where.input';

@InputType()
export class NovelUncheckedUpdateManyWithoutCommendableTypeNestedInput {

    @Field(() => [NovelCreateWithoutCommendableTypeInput], {nullable:true})
    @Type(() => NovelCreateWithoutCommendableTypeInput)
    create?: Array<NovelCreateWithoutCommendableTypeInput>;

    @Field(() => [NovelCreateOrConnectWithoutCommendableTypeInput], {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutCommendableTypeInput)
    connectOrCreate?: Array<NovelCreateOrConnectWithoutCommendableTypeInput>;

    @Field(() => [NovelUpsertWithWhereUniqueWithoutCommendableTypeInput], {nullable:true})
    @Type(() => NovelUpsertWithWhereUniqueWithoutCommendableTypeInput)
    upsert?: Array<NovelUpsertWithWhereUniqueWithoutCommendableTypeInput>;

    @Field(() => NovelCreateManyCommendableTypeInputEnvelope, {nullable:true})
    @Type(() => NovelCreateManyCommendableTypeInputEnvelope)
    createMany?: NovelCreateManyCommendableTypeInputEnvelope;

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

    @Field(() => [NovelUpdateWithWhereUniqueWithoutCommendableTypeInput], {nullable:true})
    @Type(() => NovelUpdateWithWhereUniqueWithoutCommendableTypeInput)
    update?: Array<NovelUpdateWithWhereUniqueWithoutCommendableTypeInput>;

    @Field(() => [NovelUpdateManyWithWhereWithoutCommendableTypeInput], {nullable:true})
    @Type(() => NovelUpdateManyWithWhereWithoutCommendableTypeInput)
    updateMany?: Array<NovelUpdateManyWithWhereWithoutCommendableTypeInput>;

    @Field(() => [NovelScalarWhereInput], {nullable:true})
    @Type(() => NovelScalarWhereInput)
    deleteMany?: Array<NovelScalarWhereInput>;
}
