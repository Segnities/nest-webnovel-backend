import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelWhereInput } from './novel-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyNovelArgs {

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;
}
