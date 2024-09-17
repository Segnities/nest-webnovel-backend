import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterCreateWithoutCommendableTypeInput } from './chapter-create-without-commendable-type.input';
import { Type } from 'class-transformer';
import { ChapterCreateOrConnectWithoutCommendableTypeInput } from './chapter-create-or-connect-without-commendable-type.input';
import { ChapterUpsertWithWhereUniqueWithoutCommendableTypeInput } from './chapter-upsert-with-where-unique-without-commendable-type.input';
import { ChapterCreateManyCommendableTypeInputEnvelope } from './chapter-create-many-commendable-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChapterWhereUniqueInput } from './chapter-where-unique.input';
import { ChapterUpdateWithWhereUniqueWithoutCommendableTypeInput } from './chapter-update-with-where-unique-without-commendable-type.input';
import { ChapterUpdateManyWithWhereWithoutCommendableTypeInput } from './chapter-update-many-with-where-without-commendable-type.input';
import { ChapterScalarWhereInput } from './chapter-scalar-where.input';

@InputType()
export class ChapterUpdateManyWithoutCommendableTypeNestedInput {

    @Field(() => [ChapterCreateWithoutCommendableTypeInput], {nullable:true})
    @Type(() => ChapterCreateWithoutCommendableTypeInput)
    create?: Array<ChapterCreateWithoutCommendableTypeInput>;

    @Field(() => [ChapterCreateOrConnectWithoutCommendableTypeInput], {nullable:true})
    @Type(() => ChapterCreateOrConnectWithoutCommendableTypeInput)
    connectOrCreate?: Array<ChapterCreateOrConnectWithoutCommendableTypeInput>;

    @Field(() => [ChapterUpsertWithWhereUniqueWithoutCommendableTypeInput], {nullable:true})
    @Type(() => ChapterUpsertWithWhereUniqueWithoutCommendableTypeInput)
    upsert?: Array<ChapterUpsertWithWhereUniqueWithoutCommendableTypeInput>;

    @Field(() => ChapterCreateManyCommendableTypeInputEnvelope, {nullable:true})
    @Type(() => ChapterCreateManyCommendableTypeInputEnvelope)
    createMany?: ChapterCreateManyCommendableTypeInputEnvelope;

    @Field(() => [ChapterWhereUniqueInput], {nullable:true})
    @Type(() => ChapterWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>>;

    @Field(() => [ChapterWhereUniqueInput], {nullable:true})
    @Type(() => ChapterWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>>;

    @Field(() => [ChapterWhereUniqueInput], {nullable:true})
    @Type(() => ChapterWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>>;

    @Field(() => [ChapterWhereUniqueInput], {nullable:true})
    @Type(() => ChapterWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>>;

    @Field(() => [ChapterUpdateWithWhereUniqueWithoutCommendableTypeInput], {nullable:true})
    @Type(() => ChapterUpdateWithWhereUniqueWithoutCommendableTypeInput)
    update?: Array<ChapterUpdateWithWhereUniqueWithoutCommendableTypeInput>;

    @Field(() => [ChapterUpdateManyWithWhereWithoutCommendableTypeInput], {nullable:true})
    @Type(() => ChapterUpdateManyWithWhereWithoutCommendableTypeInput)
    updateMany?: Array<ChapterUpdateManyWithWhereWithoutCommendableTypeInput>;

    @Field(() => [ChapterScalarWhereInput], {nullable:true})
    @Type(() => ChapterScalarWhereInput)
    deleteMany?: Array<ChapterScalarWhereInput>;
}
