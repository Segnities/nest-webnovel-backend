import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NewsCreateWithoutComplainTargetTypeInput } from './news-create-without-complain-target-type.input';
import { Type } from 'class-transformer';
import { NewsCreateOrConnectWithoutComplainTargetTypeInput } from './news-create-or-connect-without-complain-target-type.input';
import { NewsUpsertWithWhereUniqueWithoutComplainTargetTypeInput } from './news-upsert-with-where-unique-without-complain-target-type.input';
import { NewsCreateManyComplainTargetTypeInputEnvelope } from './news-create-many-complain-target-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NewsWhereUniqueInput } from './news-where-unique.input';
import { NewsUpdateWithWhereUniqueWithoutComplainTargetTypeInput } from './news-update-with-where-unique-without-complain-target-type.input';
import { NewsUpdateManyWithWhereWithoutComplainTargetTypeInput } from './news-update-many-with-where-without-complain-target-type.input';
import { NewsScalarWhereInput } from './news-scalar-where.input';

@InputType()
export class NewsUpdateManyWithoutComplainTargetTypeNestedInput {

    @Field(() => [NewsCreateWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => NewsCreateWithoutComplainTargetTypeInput)
    create?: Array<NewsCreateWithoutComplainTargetTypeInput>;

    @Field(() => [NewsCreateOrConnectWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => NewsCreateOrConnectWithoutComplainTargetTypeInput)
    connectOrCreate?: Array<NewsCreateOrConnectWithoutComplainTargetTypeInput>;

    @Field(() => [NewsUpsertWithWhereUniqueWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => NewsUpsertWithWhereUniqueWithoutComplainTargetTypeInput)
    upsert?: Array<NewsUpsertWithWhereUniqueWithoutComplainTargetTypeInput>;

    @Field(() => NewsCreateManyComplainTargetTypeInputEnvelope, {nullable:true})
    @Type(() => NewsCreateManyComplainTargetTypeInputEnvelope)
    createMany?: NewsCreateManyComplainTargetTypeInputEnvelope;

    @Field(() => [NewsWhereUniqueInput], {nullable:true})
    @Type(() => NewsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<NewsWhereUniqueInput, 'id'>>;

    @Field(() => [NewsWhereUniqueInput], {nullable:true})
    @Type(() => NewsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<NewsWhereUniqueInput, 'id'>>;

    @Field(() => [NewsWhereUniqueInput], {nullable:true})
    @Type(() => NewsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<NewsWhereUniqueInput, 'id'>>;

    @Field(() => [NewsWhereUniqueInput], {nullable:true})
    @Type(() => NewsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NewsWhereUniqueInput, 'id'>>;

    @Field(() => [NewsUpdateWithWhereUniqueWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => NewsUpdateWithWhereUniqueWithoutComplainTargetTypeInput)
    update?: Array<NewsUpdateWithWhereUniqueWithoutComplainTargetTypeInput>;

    @Field(() => [NewsUpdateManyWithWhereWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => NewsUpdateManyWithWhereWithoutComplainTargetTypeInput)
    updateMany?: Array<NewsUpdateManyWithWhereWithoutComplainTargetTypeInput>;

    @Field(() => [NewsScalarWhereInput], {nullable:true})
    @Type(() => NewsScalarWhereInput)
    deleteMany?: Array<NewsScalarWhereInput>;
}
