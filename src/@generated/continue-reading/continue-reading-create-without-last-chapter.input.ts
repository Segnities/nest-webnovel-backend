import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutContinueReadingInput } from '../user/user-create-nested-one-without-continue-reading.input';
import { NovelCreateNestedOneWithoutContinueReadingInput } from '../novel/novel-create-nested-one-without-continue-reading.input';

@InputType()
export class ContinueReadingCreateWithoutLastChapterInput {

    @Field(() => Float, {nullable:false})
    progressPercentage!: number;

    @Field(() => UserCreateNestedOneWithoutContinueReadingInput, {nullable:false})
    user!: UserCreateNestedOneWithoutContinueReadingInput;

    @Field(() => NovelCreateNestedOneWithoutContinueReadingInput, {nullable:false})
    novel!: NovelCreateNestedOneWithoutContinueReadingInput;
}
