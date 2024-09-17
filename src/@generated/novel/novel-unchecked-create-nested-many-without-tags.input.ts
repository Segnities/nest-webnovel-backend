import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutTagsInput } from './novel-create-without-tags.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutTagsInput } from './novel-create-or-connect-without-tags.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';

@InputType()
export class NovelUncheckedCreateNestedManyWithoutTagsInput {

    @Field(() => [NovelCreateWithoutTagsInput], {nullable:true})
    @Type(() => NovelCreateWithoutTagsInput)
    create?: Array<NovelCreateWithoutTagsInput>;

    @Field(() => [NovelCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<NovelCreateOrConnectWithoutTagsInput>;

    @Field(() => [NovelWhereUniqueInput], {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NovelWhereUniqueInput, 'id'>>;
}
