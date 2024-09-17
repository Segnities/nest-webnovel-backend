import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NewsCreateManyInput } from './news-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNewsArgs {

    @Field(() => [NewsCreateManyInput], {nullable:false})
    @Type(() => NewsCreateManyInput)
    data!: Array<NewsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
