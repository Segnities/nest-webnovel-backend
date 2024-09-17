import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NewsWhereUniqueInput } from './news-where-unique.input';
import { Type } from 'class-transformer';
import { NewsUpdateWithoutUserInput } from './news-update-without-user.input';
import { NewsCreateWithoutUserInput } from './news-create-without-user.input';

@InputType()
export class NewsUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => NewsWhereUniqueInput, {nullable:false})
    @Type(() => NewsWhereUniqueInput)
    where!: Prisma.AtLeast<NewsWhereUniqueInput, 'id'>;

    @Field(() => NewsUpdateWithoutUserInput, {nullable:false})
    @Type(() => NewsUpdateWithoutUserInput)
    update!: NewsUpdateWithoutUserInput;

    @Field(() => NewsCreateWithoutUserInput, {nullable:false})
    @Type(() => NewsCreateWithoutUserInput)
    create!: NewsCreateWithoutUserInput;
}
