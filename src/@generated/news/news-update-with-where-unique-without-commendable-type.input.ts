import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NewsWhereUniqueInput } from './news-where-unique.input';
import { Type } from 'class-transformer';
import { NewsUpdateWithoutCommendableTypeInput } from './news-update-without-commendable-type.input';

@InputType()
export class NewsUpdateWithWhereUniqueWithoutCommendableTypeInput {

    @Field(() => NewsWhereUniqueInput, {nullable:false})
    @Type(() => NewsWhereUniqueInput)
    where!: Prisma.AtLeast<NewsWhereUniqueInput, 'id'>;

    @Field(() => NewsUpdateWithoutCommendableTypeInput, {nullable:false})
    @Type(() => NewsUpdateWithoutCommendableTypeInput)
    data!: NewsUpdateWithoutCommendableTypeInput;
}
