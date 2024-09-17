import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelRatingCreateWithoutNovelInput } from './novel-rating-create-without-novel.input';
import { Type } from 'class-transformer';
import { NovelRatingCreateOrConnectWithoutNovelInput } from './novel-rating-create-or-connect-without-novel.input';
import { Prisma } from '@prisma/client';
import { NovelRatingWhereUniqueInput } from './novel-rating-where-unique.input';

@InputType()
export class NovelRatingCreateNestedOneWithoutNovelInput {

    @Field(() => NovelRatingCreateWithoutNovelInput, {nullable:true})
    @Type(() => NovelRatingCreateWithoutNovelInput)
    create?: NovelRatingCreateWithoutNovelInput;

    @Field(() => NovelRatingCreateOrConnectWithoutNovelInput, {nullable:true})
    @Type(() => NovelRatingCreateOrConnectWithoutNovelInput)
    connectOrCreate?: NovelRatingCreateOrConnectWithoutNovelInput;

    @Field(() => NovelRatingWhereUniqueInput, {nullable:true})
    @Type(() => NovelRatingWhereUniqueInput)
    connect?: Prisma.AtLeast<NovelRatingWhereUniqueInput, 'id' | 'novelId'>;
}
