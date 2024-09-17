import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutAuthorInput } from './novel-create-without-author.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutAuthorInput } from './novel-create-or-connect-without-author.input';
import { NovelCreateManyAuthorInputEnvelope } from './novel-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';

@InputType()
export class NovelCreateNestedManyWithoutAuthorInput {

    @Field(() => [NovelCreateWithoutAuthorInput], {nullable:true})
    @Type(() => NovelCreateWithoutAuthorInput)
    create?: Array<NovelCreateWithoutAuthorInput>;

    @Field(() => [NovelCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<NovelCreateOrConnectWithoutAuthorInput>;

    @Field(() => NovelCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => NovelCreateManyAuthorInputEnvelope)
    createMany?: NovelCreateManyAuthorInputEnvelope;

    @Field(() => [NovelWhereUniqueInput], {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NovelWhereUniqueInput, 'id'>>;
}
