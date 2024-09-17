import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelRatingCreateWithoutNovelInput } from './novel-rating-create-without-novel.input';
import { Type } from 'class-transformer';
import { NovelRatingCreateOrConnectWithoutNovelInput } from './novel-rating-create-or-connect-without-novel.input';
import { NovelRatingUpsertWithoutNovelInput } from './novel-rating-upsert-without-novel.input';
import { NovelRatingWhereInput } from './novel-rating-where.input';
import { Prisma } from '@prisma/client';
import { NovelRatingWhereUniqueInput } from './novel-rating-where-unique.input';
import { NovelRatingUpdateToOneWithWhereWithoutNovelInput } from './novel-rating-update-to-one-with-where-without-novel.input';

@InputType()
export class NovelRatingUpdateOneWithoutNovelNestedInput {

    @Field(() => NovelRatingCreateWithoutNovelInput, {nullable:true})
    @Type(() => NovelRatingCreateWithoutNovelInput)
    create?: NovelRatingCreateWithoutNovelInput;

    @Field(() => NovelRatingCreateOrConnectWithoutNovelInput, {nullable:true})
    @Type(() => NovelRatingCreateOrConnectWithoutNovelInput)
    connectOrCreate?: NovelRatingCreateOrConnectWithoutNovelInput;

    @Field(() => NovelRatingUpsertWithoutNovelInput, {nullable:true})
    @Type(() => NovelRatingUpsertWithoutNovelInput)
    upsert?: NovelRatingUpsertWithoutNovelInput;

    @Field(() => NovelRatingWhereInput, {nullable:true})
    @Type(() => NovelRatingWhereInput)
    disconnect?: NovelRatingWhereInput;

    @Field(() => NovelRatingWhereInput, {nullable:true})
    @Type(() => NovelRatingWhereInput)
    delete?: NovelRatingWhereInput;

    @Field(() => NovelRatingWhereUniqueInput, {nullable:true})
    @Type(() => NovelRatingWhereUniqueInput)
    connect?: Prisma.AtLeast<NovelRatingWhereUniqueInput, 'id' | 'novelId'>;

    @Field(() => NovelRatingUpdateToOneWithWhereWithoutNovelInput, {nullable:true})
    @Type(() => NovelRatingUpdateToOneWithWhereWithoutNovelInput)
    update?: NovelRatingUpdateToOneWithWhereWithoutNovelInput;
}
