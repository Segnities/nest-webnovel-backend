import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NewsCreateWithoutCommendableTypeInput } from './news-create-without-commendable-type.input';
import { Type } from 'class-transformer';
import { NewsCreateOrConnectWithoutCommendableTypeInput } from './news-create-or-connect-without-commendable-type.input';
import { NewsUpsertWithWhereUniqueWithoutCommendableTypeInput } from './news-upsert-with-where-unique-without-commendable-type.input';
import { NewsCreateManyCommendableTypeInputEnvelope } from './news-create-many-commendable-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NewsWhereUniqueInput } from './news-where-unique.input';
import { NewsUpdateWithWhereUniqueWithoutCommendableTypeInput } from './news-update-with-where-unique-without-commendable-type.input';
import { NewsUpdateManyWithWhereWithoutCommendableTypeInput } from './news-update-many-with-where-without-commendable-type.input';
import { NewsScalarWhereInput } from './news-scalar-where.input';

@InputType()
export class NewsUncheckedUpdateManyWithoutCommendableTypeNestedInput {

    @Field(() => [NewsCreateWithoutCommendableTypeInput], {nullable:true})
    @Type(() => NewsCreateWithoutCommendableTypeInput)
    create?: Array<NewsCreateWithoutCommendableTypeInput>;

    @Field(() => [NewsCreateOrConnectWithoutCommendableTypeInput], {nullable:true})
    @Type(() => NewsCreateOrConnectWithoutCommendableTypeInput)
    connectOrCreate?: Array<NewsCreateOrConnectWithoutCommendableTypeInput>;

    @Field(() => [NewsUpsertWithWhereUniqueWithoutCommendableTypeInput], {nullable:true})
    @Type(() => NewsUpsertWithWhereUniqueWithoutCommendableTypeInput)
    upsert?: Array<NewsUpsertWithWhereUniqueWithoutCommendableTypeInput>;

    @Field(() => NewsCreateManyCommendableTypeInputEnvelope, {nullable:true})
    @Type(() => NewsCreateManyCommendableTypeInputEnvelope)
    createMany?: NewsCreateManyCommendableTypeInputEnvelope;

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

    @Field(() => [NewsUpdateWithWhereUniqueWithoutCommendableTypeInput], {nullable:true})
    @Type(() => NewsUpdateWithWhereUniqueWithoutCommendableTypeInput)
    update?: Array<NewsUpdateWithWhereUniqueWithoutCommendableTypeInput>;

    @Field(() => [NewsUpdateManyWithWhereWithoutCommendableTypeInput], {nullable:true})
    @Type(() => NewsUpdateManyWithWhereWithoutCommendableTypeInput)
    updateMany?: Array<NewsUpdateManyWithWhereWithoutCommendableTypeInput>;

    @Field(() => [NewsScalarWhereInput], {nullable:true})
    @Type(() => NewsScalarWhereInput)
    deleteMany?: Array<NewsScalarWhereInput>;
}
