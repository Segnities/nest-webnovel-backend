import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NewsWhereInput } from './news-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyNewsArgs {

    @Field(() => NewsWhereInput, {nullable:true})
    @Type(() => NewsWhereInput)
    where?: NewsWhereInput;
}
