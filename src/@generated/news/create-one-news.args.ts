import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NewsCreateInput } from './news-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNewsArgs {

    @Field(() => NewsCreateInput, {nullable:false})
    @Type(() => NewsCreateInput)
    data!: NewsCreateInput;
}
