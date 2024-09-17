import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutContinueReadingInput } from '../user/user-create-nested-one-without-continue-reading.input';
import { ChapterCreateNestedOneWithoutContinueNovelInput } from '../chapter/chapter-create-nested-one-without-continue-novel.input';

@InputType()
export class ContinueReadingCreateWithoutNovelInput {

    @Field(() => Float, {nullable:false})
    progressPercentage!: number;

    @Field(() => UserCreateNestedOneWithoutContinueReadingInput, {nullable:false})
    user!: UserCreateNestedOneWithoutContinueReadingInput;

    @Field(() => ChapterCreateNestedOneWithoutContinueNovelInput, {nullable:false})
    lastChapter!: ChapterCreateNestedOneWithoutContinueNovelInput;
}
