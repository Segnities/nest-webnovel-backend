import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterUpdateWithoutContinueNovelInput } from './chapter-update-without-continue-novel.input';
import { Type } from 'class-transformer';
import { ChapterCreateWithoutContinueNovelInput } from './chapter-create-without-continue-novel.input';
import { ChapterWhereInput } from './chapter-where.input';

@InputType()
export class ChapterUpsertWithoutContinueNovelInput {

    @Field(() => ChapterUpdateWithoutContinueNovelInput, {nullable:false})
    @Type(() => ChapterUpdateWithoutContinueNovelInput)
    update!: ChapterUpdateWithoutContinueNovelInput;

    @Field(() => ChapterCreateWithoutContinueNovelInput, {nullable:false})
    @Type(() => ChapterCreateWithoutContinueNovelInput)
    create!: ChapterCreateWithoutContinueNovelInput;

    @Field(() => ChapterWhereInput, {nullable:true})
    @Type(() => ChapterWhereInput)
    where?: ChapterWhereInput;
}
