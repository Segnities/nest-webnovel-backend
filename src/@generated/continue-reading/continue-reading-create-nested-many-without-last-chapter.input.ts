import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContinueReadingCreateWithoutLastChapterInput } from './continue-reading-create-without-last-chapter.input';
import { Type } from 'class-transformer';
import { ContinueReadingCreateOrConnectWithoutLastChapterInput } from './continue-reading-create-or-connect-without-last-chapter.input';
import { ContinueReadingCreateManyLastChapterInputEnvelope } from './continue-reading-create-many-last-chapter-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContinueReadingWhereUniqueInput } from './continue-reading-where-unique.input';

@InputType()
export class ContinueReadingCreateNestedManyWithoutLastChapterInput {

    @Field(() => [ContinueReadingCreateWithoutLastChapterInput], {nullable:true})
    @Type(() => ContinueReadingCreateWithoutLastChapterInput)
    create?: Array<ContinueReadingCreateWithoutLastChapterInput>;

    @Field(() => [ContinueReadingCreateOrConnectWithoutLastChapterInput], {nullable:true})
    @Type(() => ContinueReadingCreateOrConnectWithoutLastChapterInput)
    connectOrCreate?: Array<ContinueReadingCreateOrConnectWithoutLastChapterInput>;

    @Field(() => ContinueReadingCreateManyLastChapterInputEnvelope, {nullable:true})
    @Type(() => ContinueReadingCreateManyLastChapterInputEnvelope)
    createMany?: ContinueReadingCreateManyLastChapterInputEnvelope;

    @Field(() => [ContinueReadingWhereUniqueInput], {nullable:true})
    @Type(() => ContinueReadingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContinueReadingWhereUniqueInput, 'id'>>;
}
