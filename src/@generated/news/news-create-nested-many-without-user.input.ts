import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NewsCreateWithoutUserInput } from './news-create-without-user.input';
import { Type } from 'class-transformer';
import { NewsCreateOrConnectWithoutUserInput } from './news-create-or-connect-without-user.input';
import { NewsCreateManyUserInputEnvelope } from './news-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NewsWhereUniqueInput } from './news-where-unique.input';

@InputType()
export class NewsCreateNestedManyWithoutUserInput {

    @Field(() => [NewsCreateWithoutUserInput], {nullable:true})
    @Type(() => NewsCreateWithoutUserInput)
    create?: Array<NewsCreateWithoutUserInput>;

    @Field(() => [NewsCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => NewsCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<NewsCreateOrConnectWithoutUserInput>;

    @Field(() => NewsCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => NewsCreateManyUserInputEnvelope)
    createMany?: NewsCreateManyUserInputEnvelope;

    @Field(() => [NewsWhereUniqueInput], {nullable:true})
    @Type(() => NewsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NewsWhereUniqueInput, 'id'>>;
}
