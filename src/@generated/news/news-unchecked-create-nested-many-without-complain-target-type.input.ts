import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NewsCreateWithoutComplainTargetTypeInput } from './news-create-without-complain-target-type.input';
import { Type } from 'class-transformer';
import { NewsCreateOrConnectWithoutComplainTargetTypeInput } from './news-create-or-connect-without-complain-target-type.input';
import { NewsCreateManyComplainTargetTypeInputEnvelope } from './news-create-many-complain-target-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NewsWhereUniqueInput } from './news-where-unique.input';

@InputType()
export class NewsUncheckedCreateNestedManyWithoutComplainTargetTypeInput {

    @Field(() => [NewsCreateWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => NewsCreateWithoutComplainTargetTypeInput)
    create?: Array<NewsCreateWithoutComplainTargetTypeInput>;

    @Field(() => [NewsCreateOrConnectWithoutComplainTargetTypeInput], {nullable:true})
    @Type(() => NewsCreateOrConnectWithoutComplainTargetTypeInput)
    connectOrCreate?: Array<NewsCreateOrConnectWithoutComplainTargetTypeInput>;

    @Field(() => NewsCreateManyComplainTargetTypeInputEnvelope, {nullable:true})
    @Type(() => NewsCreateManyComplainTargetTypeInputEnvelope)
    createMany?: NewsCreateManyComplainTargetTypeInputEnvelope;

    @Field(() => [NewsWhereUniqueInput], {nullable:true})
    @Type(() => NewsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NewsWhereUniqueInput, 'id'>>;
}
