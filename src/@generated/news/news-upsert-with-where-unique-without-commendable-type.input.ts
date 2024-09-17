import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NewsWhereUniqueInput } from './news-where-unique.input';
import { Type } from 'class-transformer';
import { NewsUpdateWithoutCommendableTypeInput } from './news-update-without-commendable-type.input';
import { NewsCreateWithoutCommendableTypeInput } from './news-create-without-commendable-type.input';

@InputType()
export class NewsUpsertWithWhereUniqueWithoutCommendableTypeInput {

    @Field(() => NewsWhereUniqueInput, {nullable:false})
    @Type(() => NewsWhereUniqueInput)
    where!: Prisma.AtLeast<NewsWhereUniqueInput, 'id'>;

    @Field(() => NewsUpdateWithoutCommendableTypeInput, {nullable:false})
    @Type(() => NewsUpdateWithoutCommendableTypeInput)
    update!: NewsUpdateWithoutCommendableTypeInput;

    @Field(() => NewsCreateWithoutCommendableTypeInput, {nullable:false})
    @Type(() => NewsCreateWithoutCommendableTypeInput)
    create!: NewsCreateWithoutCommendableTypeInput;
}
