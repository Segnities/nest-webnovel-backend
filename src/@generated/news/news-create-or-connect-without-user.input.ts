import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NewsWhereUniqueInput } from './news-where-unique.input';
import { Type } from 'class-transformer';
import { NewsCreateWithoutUserInput } from './news-create-without-user.input';

@InputType()
export class NewsCreateOrConnectWithoutUserInput {

    @Field(() => NewsWhereUniqueInput, {nullable:false})
    @Type(() => NewsWhereUniqueInput)
    where!: Prisma.AtLeast<NewsWhereUniqueInput, 'id'>;

    @Field(() => NewsCreateWithoutUserInput, {nullable:false})
    @Type(() => NewsCreateWithoutUserInput)
    create!: NewsCreateWithoutUserInput;
}
