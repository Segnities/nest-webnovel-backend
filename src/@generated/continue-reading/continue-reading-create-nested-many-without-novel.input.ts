import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContinueReadingCreateWithoutNovelInput } from './continue-reading-create-without-novel.input';
import { Type } from 'class-transformer';
import { ContinueReadingCreateOrConnectWithoutNovelInput } from './continue-reading-create-or-connect-without-novel.input';
import { ContinueReadingCreateManyNovelInputEnvelope } from './continue-reading-create-many-novel-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContinueReadingWhereUniqueInput } from './continue-reading-where-unique.input';

@InputType()
export class ContinueReadingCreateNestedManyWithoutNovelInput {

    @Field(() => [ContinueReadingCreateWithoutNovelInput], {nullable:true})
    @Type(() => ContinueReadingCreateWithoutNovelInput)
    create?: Array<ContinueReadingCreateWithoutNovelInput>;

    @Field(() => [ContinueReadingCreateOrConnectWithoutNovelInput], {nullable:true})
    @Type(() => ContinueReadingCreateOrConnectWithoutNovelInput)
    connectOrCreate?: Array<ContinueReadingCreateOrConnectWithoutNovelInput>;

    @Field(() => ContinueReadingCreateManyNovelInputEnvelope, {nullable:true})
    @Type(() => ContinueReadingCreateManyNovelInputEnvelope)
    createMany?: ContinueReadingCreateManyNovelInputEnvelope;

    @Field(() => [ContinueReadingWhereUniqueInput], {nullable:true})
    @Type(() => ContinueReadingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContinueReadingWhereUniqueInput, 'id'>>;
}
