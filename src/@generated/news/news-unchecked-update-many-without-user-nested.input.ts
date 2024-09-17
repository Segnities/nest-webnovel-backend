import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NewsCreateWithoutUserInput } from './news-create-without-user.input';
import { Type } from 'class-transformer';
import { NewsCreateOrConnectWithoutUserInput } from './news-create-or-connect-without-user.input';
import { NewsUpsertWithWhereUniqueWithoutUserInput } from './news-upsert-with-where-unique-without-user.input';
import { NewsCreateManyUserInputEnvelope } from './news-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NewsWhereUniqueInput } from './news-where-unique.input';
import { NewsUpdateWithWhereUniqueWithoutUserInput } from './news-update-with-where-unique-without-user.input';
import { NewsUpdateManyWithWhereWithoutUserInput } from './news-update-many-with-where-without-user.input';
import { NewsScalarWhereInput } from './news-scalar-where.input';

@InputType()
export class NewsUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [NewsCreateWithoutUserInput], {nullable:true})
    @Type(() => NewsCreateWithoutUserInput)
    create?: Array<NewsCreateWithoutUserInput>;

    @Field(() => [NewsCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => NewsCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<NewsCreateOrConnectWithoutUserInput>;

    @Field(() => [NewsUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => NewsUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<NewsUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => NewsCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => NewsCreateManyUserInputEnvelope)
    createMany?: NewsCreateManyUserInputEnvelope;

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

    @Field(() => [NewsUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => NewsUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<NewsUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [NewsUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => NewsUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<NewsUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [NewsScalarWhereInput], {nullable:true})
    @Type(() => NewsScalarWhereInput)
    deleteMany?: Array<NewsScalarWhereInput>;
}
