import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelUpdateWithoutContinueReadingInput } from './novel-update-without-continue-reading.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutContinueReadingInput } from './novel-create-without-continue-reading.input';
import { NovelWhereInput } from './novel-where.input';

@InputType()
export class NovelUpsertWithoutContinueReadingInput {

    @Field(() => NovelUpdateWithoutContinueReadingInput, {nullable:false})
    @Type(() => NovelUpdateWithoutContinueReadingInput)
    update!: NovelUpdateWithoutContinueReadingInput;

    @Field(() => NovelCreateWithoutContinueReadingInput, {nullable:false})
    @Type(() => NovelCreateWithoutContinueReadingInput)
    create!: NovelCreateWithoutContinueReadingInput;

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;
}
