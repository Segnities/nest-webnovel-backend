import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutNovelRatingInput } from './novel-create-without-novel-rating.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutNovelRatingInput } from './novel-create-or-connect-without-novel-rating.input';
import { NovelUpsertWithoutNovelRatingInput } from './novel-upsert-without-novel-rating.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { NovelUpdateToOneWithWhereWithoutNovelRatingInput } from './novel-update-to-one-with-where-without-novel-rating.input';

@InputType()
export class NovelUpdateOneRequiredWithoutNovelRatingNestedInput {

    @Field(() => NovelCreateWithoutNovelRatingInput, {nullable:true})
    @Type(() => NovelCreateWithoutNovelRatingInput)
    create?: NovelCreateWithoutNovelRatingInput;

    @Field(() => NovelCreateOrConnectWithoutNovelRatingInput, {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutNovelRatingInput)
    connectOrCreate?: NovelCreateOrConnectWithoutNovelRatingInput;

    @Field(() => NovelUpsertWithoutNovelRatingInput, {nullable:true})
    @Type(() => NovelUpsertWithoutNovelRatingInput)
    upsert?: NovelUpsertWithoutNovelRatingInput;

    @Field(() => NovelWhereUniqueInput, {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelUpdateToOneWithWhereWithoutNovelRatingInput, {nullable:true})
    @Type(() => NovelUpdateToOneWithWhereWithoutNovelRatingInput)
    update?: NovelUpdateToOneWithWhereWithoutNovelRatingInput;
}
