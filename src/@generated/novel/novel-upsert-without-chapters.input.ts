import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelUpdateWithoutChaptersInput } from './novel-update-without-chapters.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutChaptersInput } from './novel-create-without-chapters.input';
import { NovelWhereInput } from './novel-where.input';

@InputType()
export class NovelUpsertWithoutChaptersInput {

    @Field(() => NovelUpdateWithoutChaptersInput, {nullable:false})
    @Type(() => NovelUpdateWithoutChaptersInput)
    update!: NovelUpdateWithoutChaptersInput;

    @Field(() => NovelCreateWithoutChaptersInput, {nullable:false})
    @Type(() => NovelCreateWithoutChaptersInput)
    create!: NovelCreateWithoutChaptersInput;

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;
}
