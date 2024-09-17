import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelWhereInput } from './novel-where.input';
import { Type } from 'class-transformer';
import { NovelUpdateWithoutChaptersInput } from './novel-update-without-chapters.input';

@InputType()
export class NovelUpdateToOneWithWhereWithoutChaptersInput {

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;

    @Field(() => NovelUpdateWithoutChaptersInput, {nullable:false})
    @Type(() => NovelUpdateWithoutChaptersInput)
    data!: NovelUpdateWithoutChaptersInput;
}
