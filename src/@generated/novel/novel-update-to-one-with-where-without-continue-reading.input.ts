import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelWhereInput } from './novel-where.input';
import { Type } from 'class-transformer';
import { NovelUpdateWithoutContinueReadingInput } from './novel-update-without-continue-reading.input';

@InputType()
export class NovelUpdateToOneWithWhereWithoutContinueReadingInput {

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;

    @Field(() => NovelUpdateWithoutContinueReadingInput, {nullable:false})
    @Type(() => NovelUpdateWithoutContinueReadingInput)
    data!: NovelUpdateWithoutContinueReadingInput;
}
