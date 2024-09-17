import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelCreateInput } from './novel-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNovelArgs {

    @Field(() => NovelCreateInput, {nullable:false})
    @Type(() => NovelCreateInput)
    data!: NovelCreateInput;
}
