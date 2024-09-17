import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NewsUpdateInput } from './news-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { NewsWhereUniqueInput } from './news-where-unique.input';

@ArgsType()
export class UpdateOneNewsArgs {

    @Field(() => NewsUpdateInput, {nullable:false})
    @Type(() => NewsUpdateInput)
    data!: NewsUpdateInput;

    @Field(() => NewsWhereUniqueInput, {nullable:false})
    @Type(() => NewsWhereUniqueInput)
    where!: Prisma.AtLeast<NewsWhereUniqueInput, 'id'>;
}
