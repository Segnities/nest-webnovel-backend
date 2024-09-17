import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NewsWhereUniqueInput } from './news-where-unique.input';
import { Type } from 'class-transformer';
import { NewsUpdateWithoutUserInput } from './news-update-without-user.input';

@InputType()
export class NewsUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => NewsWhereUniqueInput, {nullable:false})
    @Type(() => NewsWhereUniqueInput)
    where!: Prisma.AtLeast<NewsWhereUniqueInput, 'id'>;

    @Field(() => NewsUpdateWithoutUserInput, {nullable:false})
    @Type(() => NewsUpdateWithoutUserInput)
    data!: NewsUpdateWithoutUserInput;
}
