import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NewsCreateManyUserInput } from './news-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class NewsCreateManyUserInputEnvelope {

    @Field(() => [NewsCreateManyUserInput], {nullable:false})
    @Type(() => NewsCreateManyUserInput)
    data!: Array<NewsCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
