import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutNovelRatingInput } from './novel-create-without-novel-rating.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutNovelRatingInput } from './novel-create-or-connect-without-novel-rating.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';

@InputType()
export class NovelCreateNestedOneWithoutNovelRatingInput {

    @Field(() => NovelCreateWithoutNovelRatingInput, {nullable:true})
    @Type(() => NovelCreateWithoutNovelRatingInput)
    create?: NovelCreateWithoutNovelRatingInput;

    @Field(() => NovelCreateOrConnectWithoutNovelRatingInput, {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutNovelRatingInput)
    connectOrCreate?: NovelCreateOrConnectWithoutNovelRatingInput;

    @Field(() => NovelWhereUniqueInput, {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;
}
